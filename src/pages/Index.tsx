
import { useState } from "react";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 items-center justify-center">
        <div className="max-w-md text-center">
          <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-8 flex items-center justify-center">
            <div className="text-white text-6xl font-bold">Logo</div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Willkommen bei unserem Service
          </h2>
          <p className="text-gray-600 text-lg">
            Erstellen und verwalten Sie Ihre Inhalte an einem Ort
          </p>
        </div>
      </div>

      {/* Right side - Forms */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Willkommen! 👋</h1>
            <p className="text-gray-600">Melden Sie sich an oder erstellen Sie ein neues Konto</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-8">
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
        </div>
      </div>
    </div>
  );
};

export default Index;
