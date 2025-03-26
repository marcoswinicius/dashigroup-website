import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().min(1, 'Email é obrigatório').email('Email inválido'),
  phone: z.string().min(1, 'Telefone é obrigatório'),
  service: z.enum(['REINFORCEMENT_DETAILING', 'STEEL_FIXING', 'GROUNDWORK_AND_FALSEWORK', 'CIVIL_ENGINEERING_CONSULTING', 'OTHER']),
  additionalDetails: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const serviceOptions = [
  { value: 'REINFORCEMENT_DETAILING', label: 'Reinforcement Detailing' },
  { value: 'STEEL_FIXING', label: 'Steel Fixing' },
  { value: 'GROUNDWORK_AND_FALSEWORK', label: 'Groundwork and Falsework' },
  { value: 'CIVIL_ENGINEERING_CONSULTING', label: 'Civil Engineering & Consulting' },
  { value: 'OTHER', label: 'Other' },
]; 