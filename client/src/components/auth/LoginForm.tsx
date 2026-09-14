import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext.js';
import { Modal } from '../ui/Modal.js';
import { Input } from '../ui/Input.js';
import { Button } from '../ui/Button.js';
import { Key, UserCircle, ShieldCheck } from '@phosphor-icons/react';

export const LoginForm: React.FC = () => {
  const { isLoginModalOpen, setIsLoginModalOpen, login, quickSwitchRole, isLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      await login(email, password);
    } catch (err: any) {
      setErrorMessage(err.message || 'Credenciales no válidas');
    }
  };

  const handleQuickRole = async (role: 'admin' | 'designer' | 'client') => {
    setErrorMessage('');
    await quickSwitchRole(role);
    setIsLoginModalOpen(false);
  };

  return (
    <Modal
      isOpen={isLoginModalOpen}
      onClose={() => setIsLoginModalOpen(false)}
      title="Acceso al Estudio"
      subtitle="Ingreso seguro a la plataforma y portales de proyectos"
      maxWidth="md"
    >
      <div className="flex flex-col gap-6">
        {/* Quick Demo Access Bar */}
        <div className="bg-travertine-200/70 p-4 border border-obsidian-900/10">
          <span className="text-[11px] uppercase tracking-architectural text-obsidian-900/70 font-semibold block mb-2.5">
            Acceso Rápido por Perfil (1-Click Demo)
          </span>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => handleQuickRole('admin')}
              className="px-2.5 py-2 bg-obsidian-900 text-white text-[11px] font-medium tracking-wide uppercase hover:bg-black transition-colors"
            >
              Admin
            </button>
            <button
              type="button"
              onClick={() => handleQuickRole('designer')}
              className="px-2.5 py-2 bg-bronze-500 text-white text-[11px] font-medium tracking-wide uppercase hover:bg-bronze-600 transition-colors"
            >
              Diseñadora
            </button>
            <button
              type="button"
              onClick={() => handleQuickRole('client')}
              className="px-2.5 py-2 bg-travertine-400 text-obsidian-900 text-[11px] font-medium tracking-wide uppercase hover:bg-travertine-500 transition-colors"
            >
              Cliente
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="border-t border-obsidian-900/10 w-full" />
          <span className="bg-[#FAF8F5] px-3 text-[11px] uppercase tracking-widest text-obsidian-900/40">
            o con credenciales
          </span>
        </div>

        {/* Traditional Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs">
              {errorMessage}
            </div>
          )}

          <Input
            label="Correo Electrónico"
            type="email"
            required
            placeholder="ej: admin@delpapadesign.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <Input
            label="Contraseña"
            type="password"
            required
            placeholder="••••••••"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            variant="primary"
            size="md"
            isLoading={isLoading}
            className="w-full mt-2"
          >
            Iniciar Sesión
          </Button>
        </form>

        {/* Help hints */}
        <div className="text-[11px] text-obsidian-900/60 leading-relaxed hairline-t pt-3">
          <strong className="text-obsidian-900 font-medium">Credenciales del sistema:</strong>
          <ul className="mt-1 list-disc list-inside space-y-0.5 font-mono text-[10px]">
            <li>Admin: admin@delpapadesign.com / admin123</li>
            <li>Diseñadora: designer@delpapadesign.com / design123</li>
            <li>Cliente: client@delpapadesign.com / client123</li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};
