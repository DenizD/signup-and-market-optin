
import { useState } from "react";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Willkommen</h1>
          <p className="text-gray-600">Melden Sie sich an oder erstellen Sie ein neues Konto</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login" className="text-sm font-medium">
                Anmelden
              </TabsTrigger>
              <TabsTrigger value="register" className="text-sm font-medium">
                Registrieren
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="login" className="space-y-0">
              <LoginForm />
            </TabsContent>
            
            <TabsContent value="register" className="space-y-0">
              <RegisterForm />
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="text-center mt-6 text-xs text-gray-500">
          <p>
            Durch die Nutzung unserer Dienste stimmen Sie unseren{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Nutzungsbedingungen
            </a>{" "}
            und{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Datenschutzrichtlinien
            </a>{" "}
            zu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
