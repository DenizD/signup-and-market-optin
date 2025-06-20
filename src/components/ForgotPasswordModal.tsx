
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { TranslationKey } from "@/hooks/useTranslations";

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: (key: TranslationKey) => string;
}

const ForgotPasswordModal = ({ isOpen, onClose, t }: ForgotPasswordModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError("E-Mail-Adresse ist erforderlich");
      return;
    }

    if (!validateEmail(email)) {
      setError("Bitte geben Sie eine gültige E-Mail-Adresse ein");
      return;
    }

    setError("");
    setIsLoading(true);
    console.log("Password reset requested for:", email);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
        onClose();
      }, 3000);
    }, 1500);
  };

  const handleClose = () => {
    setEmail("");
    setError("");
    setIsSubmitted(false);
    setIsLoading(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-gray-900">
            {t('forgotPassword')}
          </DialogTitle>
        </DialogHeader>
        
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label 
                htmlFor="reset-email" 
                className="text-sm font-medium text-gray-700"
              >
                {t('emailAddress')} *
              </Label>
              <Input
                id="reset-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                className={`w-full ${error ? 'border-red-500 focus:border-red-500' : ''}`}
                disabled={isLoading}
                aria-describedby={error ? "email-error" : undefined}
                required
              />
              {error && (
                <p id="email-error" className="text-sm text-red-600" role="alert">
                  {error}
                </p>
              )}
            </div>
            
            <div className="flex flex-col gap-3 pt-2">
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full min-h-[44px] font-semibold"
                style={{ 
                  backgroundColor: isLoading ? 'rgba(14, 112, 144, 0.6)' : 'rgb(14, 112, 144)',
                  color: 'white'
                }}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Wird gesendet...</span>
                  </div>
                ) : (
                  "Passwort zurücksetzen"
                )}
              </Button>
              
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleClose} 
                disabled={isLoading}
                className="w-full min-h-[44px]"
                style={{ 
                  borderColor: 'rgb(14, 112, 144)',
                  color: 'rgb(14, 112, 144)'
                }}
              >
                Abbrechen
              </Button>
            </div>
          </form>
        ) : (
          <div className="text-center py-6">
            <Alert className="border-green-200 bg-green-50">
              <AlertDescription className="text-green-800 text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">✓</span>
                  </div>
                </div>
                <strong>E-Mail gesendet!</strong>
                <br />
                Prüfen Sie Ihr Postfach und folgen Sie den Anweisungen zum Zurücksetzen Ihres Passworts.
              </AlertDescription>
            </Alert>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ForgotPasswordModal;
