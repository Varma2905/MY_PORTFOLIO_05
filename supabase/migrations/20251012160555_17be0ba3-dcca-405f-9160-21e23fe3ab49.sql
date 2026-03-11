-- Create table
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to insert
CREATE POLICY "Anyone can submit contact form" 
ON public.contacts
FOR INSERT
WITH CHECK (true);

-- Policy to allow users to select
CREATE POLICY "Users can view all contacts" 
ON public.contacts
FOR SELECT
USING (true);
