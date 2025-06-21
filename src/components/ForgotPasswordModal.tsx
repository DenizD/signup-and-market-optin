
import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TranslationKey } from "@/hooks/useTranslations";

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: (key: TranslationKey) => string;
}

const ForgotPasswordModal = ({ isOpen, onClose, t }: ForgotPasswordModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const successMessageRef = useRef<HTMLDivElement>(null);

  // Focus management when modal opens
  useEffect(() => {
    if (isOpen && !isSubmitted) {
      setTimeout(() => {
        emailInputRef.current?.focus();
      }, 100);
    } else if (isSubmitted) {
      setTimeout(() => {
        successMessageRef.current?.focus();
      }, 100);
    }
  }, [isOpen, isSubmitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset requested for:", email);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
      onClose();
    }, 2000);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setEmail("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent 
        className="sm:max-w-md"
        role="dialog"
        aria-labelledby="forgot-password-title"
        aria-describedby="forgot-password-description"
      >
        <DialogHeader>
          <DialogTitle id="forgot-password-title">{t('forgotPassword')}</DialogTitle>
        </DialogHeader>
        
        {!isSubmitted ? (
          <>
            <div id="forgot-password-description" className="sr-only">
              Geben Sie Ihre E-Mail-Adresse ein, um einen Link zum Zurücksetzen des Passworts zu erhalten
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label 
                  htmlFor="reset-email"
                  className="text-sm font-medium"
                >
                  {t('emailAddress')}
                </Label>
                <Input
                  id="reset-email"
                  ref={emailInputRef}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  aria-describedby="reset-email-helper"
                  className="w-full"
                />
                <div id="reset-email-helper" className="text-xs text-gray-600">
                  Wir senden Ihnen einen Link zum Zurücksetzen Ihres Passworts
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button 
                  type="submit" 
                  className="w-full focus:ring-2 focus:ring-offset-2 bg-primary hover:bg-primary/90"
                  aria-describedby="reset-button-description"
                >
                  Reset Password
                </Button>
                <div id="reset-button-description" className="sr-only">
                  Sendet einen Passwort-Reset-Link an Ihre E-Mail-Adresse
                </div>
                
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handleClose} 
                  className="w-full focus:ring-2 focus:ring-offset-2 border-primary text-primary hover:bg-primary/5"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-4">
            <div 
              ref={successMessageRef}
              className="text-green-600 mb-4 flex items-center justify-center gap-2"
              role="status"
              aria-live="polite"
              aria-atomic="true"
              tabIndex={-1}
            >
              <FontAwesomeIcon 
                icon="check" 
                style={{ color: '#10B981', fontSize: '1.2rem' }} 
                aria-hidden="true" 
              />
              Reset link sent to your email!
            </div>
            <div className="text-sm text-gray-600">
              Überprüfen Sie Ihren Posteingang und folgen Sie dem Link, um Ihr Passwort zurückzusetzen
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ForgotPasswordModal;
