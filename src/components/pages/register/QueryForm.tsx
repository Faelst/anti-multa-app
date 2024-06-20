import { HiChevronRight } from 'react-icons/hi';
import React, { useEffect, useState } from 'react';

import { useFormContext } from '@/context/formContext';
import { Button, Typography } from '@/components/UI/atoms';
import { MaskedInput, TextFormField } from '../../FormField';
import { Card, Grid } from '@mui/material';
import { cepMask, cpfMask, rgMask } from '../../../utils';
import { useClient } from '@/context/clientContext';

const QueryForm = () => {
  const { client } = useClient();
  const { setValue, submitting, watch } = useFormContext();

  const cep = watch('cep')?.replace(/\s|-/g, '');

  useEffect(() => {
    if (cep?.length >= 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          setValue('uf', data.uf);
          setValue('city', data.localidade);
          setValue('neighborhood', data.bairro);
          setValue('street', data.logradouro);
          setValue('zipCode', data.cep);
        });
    }
  }, [cep]);

  useEffect(() => {
    if (client) {
      setValue('name', client.name);
      setValue('cpf', client.cpf);
      setValue('phone', client.phone);
    }
  }, []);

  const loading = () => {
    return (
      <div className="flex justify-center">
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      </div>
    );
  };

  return (
    <>
      <div className="space-y-4">
        <Typography variant="xl" className="font-extrabold italic md:dark:text-white">
          Dados Pessoais
        </Typography>

        <Card
          className="space-y-3 border border-gray-400 bg-transparent p-6"
          style={{
            backgroundColor: 'transparent'
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextFormField
                name="name"
                label="Nome do solicitante"
                placeholder="Ex: João da Silva"
                required
                InputProps={{
                  inputProps: { maxLength: 100 }
                }}
                onChange={({ target }) => {
                  const value = target?.value ?? '';
                  setValue('name', value);
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextFormField
                name="email"
                label="E-mail"
                placeholder="Ex: maria@email.com"
                required
                InputProps={{ inputProps: { maxLength: 50 } }}
                onChange={({ target }) => {
                  const value = target?.value ?? '';
                  setValue('email', value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextFormField
                name="civilState"
                label="Estado Civil"
                placeholder="Ex: Solteiro"
                required
                InputProps={{ inputProps: { maxLength: 50 } }}
                onChange={({ target }) => {
                  const value = target?.value ?? '';
                  setValue('civilState', value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextFormField
                name="cpf"
                label="CPF"
                placeholder="Ex: 123.456.789-00"
                required
                InputProps={{
                  inputComponent: MaskedInput,
                  inputProps: { mask: cpfMask }
                }}
                onChange={({ target }) => {
                  const value = target?.value ?? '';
                  setValue('cpf', value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextFormField
                name="rg"
                label="RG"
                placeholder="Ex: 123456789"
                required
                InputProps={{
                  inputComponent: MaskedInput,
                  inputProps: { mask: rgMask }
                }}
                onChange={({ target }) => {
                  const value = target?.value ?? '';
                  setValue('rg', value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextFormField
                name="expeditorRg"
                label="Órgão expedidor"
                placeholder="Ex: SSP"
                required
                InputProps={{ inputProps: { maxLength: 10 } }}
                onChange={({ target }) => {
                  const value = target?.value ?? '';
                  setValue('expeditorRg', value);
                }}
              />
            </Grid>
          </Grid>

          <Grid spacing={1}>
            <TextFormField
              name="occupation"
              label="Profissão"
              placeholder="Ex: Advogado"
              required
              InputProps={{ inputProps: { maxLength: 50 } }}
              onChange={({ target }) => {
                const value = target?.value ?? '';
                setValue('occupation', value);
              }}
            />
          </Grid>
        </Card>
      </div>

      <div className="mt-8 space-y-4">
        <Typography variant="xl" className="font-extrabold italic md:dark:text-white">
          Dados da Solicitação
        </Typography>

        <Card
          className="space-y-3 border border-gray-400 bg-transparent p-6"
          style={{
            backgroundColor: 'transparent'
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextFormField
                name="vehicleOwner"
                label="Proprietário do veículo"
                placeholder="Ex: João da Silva"
                required
                InputProps={{
                  inputProps: { maxLength: 100 }
                }}
                onChange={({ target }) => {
                  const value = target?.value ?? '';
                  setValue('vehicleOwner', value);
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={5}>
              <TextFormField
                name="cnhNumber"
                label="Número da CNH"
                placeholder="Ex: 12345678900"
                required
                InputProps={{
                  inputProps: { maxLength: 11 }
                }}
                onChange={({ target }) => {
                  const value = target?.value ?? '';
                  setValue('cnhNumber', value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextFormField
                name="cnhUf"
                label="UF"
                placeholder="Ex: SP"
                required
                shrink
                InputProps={{ inputProps: { maxLength: 2 } }}
                onChange={({ target }) => {
                  const value = target?.value ?? '';
                  setValue('cnhUf', value);
                }}
              />
            </Grid>
          </Grid>
        </Card>
      </div>

      <div className="mt-8 space-y-4">
        <Typography variant="xl" className="font-extrabold italic md:dark:text-white">
          Endereço
        </Typography>

        <Card
          className="space-y-3 border border-gray-400 bg-transparent p-6"
          style={{
            backgroundColor: 'transparent'
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextFormField
                name="cep"
                label="CEP"
                placeholder="Ex: 12345-678"
                required
                InputProps={{
                  inputComponent: MaskedInput,
                  inputProps: { mask: cepMask }
                }}
                onChange={({ target }) => {
                  const value = target?.value ?? '';
                  setValue('cep', value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextFormField
                name="uf"
                label="UF"
                placeholder="Ex: SP"
                required
                shrink
                InputProps={{ inputProps: { maxLength: 2 } }}
                onChange={({ target }) => {
                  const value = target?.value ?? '';
                  setValue('uf', value);
                }}
              />
            </Grid>
          </Grid>
          <TextFormField
            name="city"
            label="Cidade"
            placeholder="Ex: São Paulo"
            value={watch('city')}
            required
            InputProps={{ inputProps: { maxLength: 50 } }}
            onChange={({ target }) => {
              const value = target?.value ?? '';
              setValue('city', value);
            }}
          />
          <TextFormField
            name="neighborhood"
            label="Bairro"
            placeholder="Ex: Vila Mariana"
            required
            shrink
            InputProps={{ inputProps: { maxLength: 50 } }}
            onChange={({ target }) => {
              const value = target?.value ?? '';
              setValue('neighborhood', value);
            }}
          />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={10}>
              <TextFormField
                name="street"
                label="Rua"
                shrink
                placeholder="Ex: Rua dos Bobos"
                required
                InputProps={{ inputProps: { maxLength: 50 } }}
                onChange={({ target }) => {
                  const value = target?.value ?? '';
                  setValue('street', value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextFormField
                name="number"
                label="Número"
                placeholder="Ex: 0"
                required
                InputProps={{ inputProps: { maxLength: 5 } }}
                onChange={({ target }) => {
                  const value = target?.value ?? '';
                  setValue('number', value);
                }}
              />
            </Grid>
          </Grid>
          <TextFormField
            name="complement"
            label="Complemento"
            placeholder="Ex: Casa"
            InputProps={{ inputProps: { maxLength: 50 } }}
            onChange={({ target }) => {
              const value = target?.value ?? '';
              setValue('complement', value);
            }}
          />
        </Card>

        <div className="flex justify-end">
          <Button className="mt-4 flex py-3" type="submit" endIcon={<HiChevronRight size={24} />}>
            {submitting ? loading() : 'Recorrer a multa'}
          </Button>
        </div>
      </div>
    </>
  );
};

export default QueryForm;
