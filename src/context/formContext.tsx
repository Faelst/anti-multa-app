import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  Control,
  FieldErrorsImpl,
  FieldValues,
  FormState,
  useForm,
  UseFormGetValues,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
  UseFormWatch
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';

type FormContextProps = {
  onSubmit: (values: FieldValues) => void;
  onError: (values: any) => void;
  setValue: UseFormSetValue<any>;
  reset: UseFormReset<any>;
  getValues: UseFormGetValues<any>;
  formState?: FormState<any>;
  validationErrors: Partial<FieldErrorsImpl<any>> | undefined;
  control?: Control<any, any>;
  watch: UseFormWatch<any>;
  submitting: boolean;
  isDirty: boolean;
  isValid: boolean;
  dirtyFields: any;
  readOnly?: boolean;
  trigger: (name?: string | string[] | undefined) => Promise<boolean>;
  register: UseFormRegister<any>;
};

const FormContext = createContext<FormContextProps>({
  readOnly: false,
  onSubmit: (values: FieldValues) => true,
  onError: (values: AxiosError) => true,
  setValue: (fieldName: string, fieldValue: FieldValues) => {
    throw new Error('formContext not initialized');
  },
  reset: () => {
    throw new Error('formContext not initialized');
  },
  watch: () => {
    throw new Error('formContext not initialized');
  },
  control: undefined,
  formState: undefined,
  getValues: () => {
    throw new Error('formContext not initialized');
  },
  validationErrors: undefined,
  submitting: false,
  isDirty: false,
  isValid: false,
  dirtyFields: {},
  trigger: () => {
    throw new Error('formContext not initialized');
  },
  register: () => {
    throw new Error('formContext not initialized');
  }
});

interface FormProviderProps {
  children: JSX.Element;
  validationSchema: any;
  defaultValues: any;
  onSubmit: (values: any) => void;
  onError?: any;
  onChangeField?: ChangeFieldDelegate[];
  readOnly?: boolean;
}

interface ChangeFieldDelegate {
  fieldName: string;
  delegate: (fieldValue: FieldValues, setValue: UseFormSetValue<any>) => void;
}

export const FormProvider = ({
  children,
  validationSchema,
  defaultValues,
  onSubmit,
  onError,
  onChangeField,
  readOnly = false
}: FormProviderProps) => {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    reset,
    formState,
    watch,
    trigger,
    formState: { isDirty, isValid, dirtyFields, errors }
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValues
  });

  useEffect(() => {
    if (!submitting) {
      reset(getValues());
    }
  }, [reset, submitting]);

  const validationErrors = Object.keys(errors ?? {}).length ? errors : undefined;
  const formSubmit = async (values: FieldValues) => {
    setSubmitting(true);
    console.log('FormContext - submiting', { values });
    try {
      const res = await onSubmit(values);
      setSubmitting(false);
      return res;
    } catch (error) {
      console.log('FormProvider - error submit', { error });
      onError && onError(error);
      setSubmitting(false);
    }
  };

  const htmlSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    return handleSubmit(formSubmit, onError)(event);
  };

  const setValueCustom = (name: any, value: any, options: any) => {
    return setValue(name, value, options);
  };

  return (
    <FormContext.Provider
      value={{
        readOnly,
        onSubmit,
        onError,
        setValue: setValueCustom,
        control,
        reset,
        formState,
        getValues,
        validationErrors,
        watch,
        submitting,
        isDirty,
        isValid,
        dirtyFields,
        trigger,
        register
      }}
    >
      <ChangeFieldHandlers handlers={onChangeField}>
        <form className="formContext" onSubmit={htmlSubmit}>
          {children}
        </form>
      </ChangeFieldHandlers>
    </FormContext.Provider>
  );
};

interface ChangeFieldHandlersProps {
  handlers: ChangeFieldDelegate[] | undefined;
  children: JSX.Element;
}

const ChangeFieldHandlers = ({ handlers, children }: ChangeFieldHandlersProps): JSX.Element => {
  const isEmpty = handlers === undefined || handlers.length === 0;
  let currentElement: JSX.Element = children;
  if (isEmpty) return currentElement;

  for (let i = 0; i < handlers.length; i++) {
    const currentHandler = handlers[i];
    currentElement = (
      <ChangeFieldHandler handler={currentHandler} children={currentElement}></ChangeFieldHandler>
    );
  }
  return currentElement;
};

interface ChangeFieldHandlerProps {
  handler: ChangeFieldDelegate;
  children: JSX.Element;
}

const ChangeFieldHandler = ({ handler, children }: ChangeFieldHandlerProps): JSX.Element => {
  const { watch, setValue, dirtyFields } = useFormContext();
  const currentValue = watch(handler.fieldName);
  useEffect(() => {
    if (dirtyFields[handler.fieldName]) {
      handler.delegate(currentValue, setValue);
    }
  }, [handler, currentValue, dirtyFields]);
  return children;
};

export function useFormContext() {
  const context = useContext(FormContext);
  const {
    readOnly,
    onSubmit,
    onError,
    setValue,
    control,
    reset,
    formState,
    getValues,
    watch,
    validationErrors,
    submitting,
    isDirty,
    isValid,
    dirtyFields,
    trigger,
    register
  } = context;
  return {
    readOnly,
    onSubmit,
    onError,
    setValue,
    control,
    reset,
    formState,
    getValues,
    validationErrors,
    watch,
    submitting,
    isDirty,
    isValid,
    dirtyFields,
    trigger,
    register
  };
}
