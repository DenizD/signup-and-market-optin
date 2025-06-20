
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
import { TranslationKey } from "@/hooks/useTranslations";

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: (key: TranslationKey) => string;
}

const ForgotPasswordModal = ({ isOpen, onClose, t }: ForgotPasswordModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t('forgotPassword')}</DialogTitle>
        </DialogHeader>
        
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="reset-email">{t('emailAddress')}</Label>
              <Input
                id="reset-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Button type="submit" className="w-full">
                Reset Password
              </Button>
              <Button type="button" variant="outline" onClick={onClose} className="w-full">
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <div className="text-center py-4">
            <p className="text-green-600 mb-4">✓ Reset link sent to your email!</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ForgotPasswordModal;
