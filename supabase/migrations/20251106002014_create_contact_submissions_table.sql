/*
  # Create contact submissions table for NovaTrack

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Name of the contact person
      - `phone` (text) - Phone number
      - `email` (text) - Email address
      - `message` (text) - Message content
      - `created_at` (timestamptz) - Timestamp when the submission was created
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for anonymous users to insert their contact submissions
    - Add policy for authenticated users to view all submissions (for admin purposes)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);