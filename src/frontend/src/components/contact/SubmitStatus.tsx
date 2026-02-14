import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2, XCircle } from 'lucide-react';

interface SubmitStatusProps {
  isSuccess: boolean;
  isError: boolean;
  error: Error | null;
}

export default function SubmitStatus({ isSuccess, isError, error }: SubmitStatusProps) {
  if (!isSuccess && !isError) {
    return null;
  }

  if (isSuccess) {
    return (
      <Alert className="border-green-500/50 bg-green-50 dark:bg-green-950/20">
        <CheckCircle2 className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-600">Message Sent Successfully!</AlertTitle>
        <AlertDescription className="text-green-600/90">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </AlertDescription>
      </Alert>
    );
  }

  if (isError) {
    return (
      <Alert variant="destructive">
        <XCircle className="h-4 w-4" />
        <AlertTitle>Error Sending Message</AlertTitle>
        <AlertDescription>
          {error?.message || 'Something went wrong. Please try again later.'}
        </AlertDescription>
      </Alert>
    );
  }

  return null;
}
