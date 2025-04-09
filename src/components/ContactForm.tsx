'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormData, contactFormSchema, serviceOptions } from '@/types/contact';
import { Select } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // TODO: Implementar envio via Resend
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full max-w-4xl mx-auto text-dark-grey">
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Input
              {...register('name')}
              placeholder="Name"
              error={errors.name?.message}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Input
              {...register('email')}
              placeholder="Email"
              error={errors.email?.message}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Input
              {...register('phone')}
              placeholder="Phone"
              error={errors.phone?.message}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Select
              {...register('service')}
              placeholder="Select Your Service"          
              options={serviceOptions}
              error={errors.service?.message}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Textarea
          {...register('additionalDetails')}
          placeholder="Additional Details!"
          className="h-32 w-full"
        />
      </div>

      <Button type="submit" variant="dark-grey" className="w-full md:w-auto md:ml-auto">
        Submit Request
      </Button>
    </form>
  );
} 