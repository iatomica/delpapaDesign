import React, { useState } from 'react';
import { Modal } from '../ui/Modal.js';
import { Input, TextArea } from '../ui/Input.js';
import { Button } from '../ui/Button.js';
import { api } from '../../services/api.js';
import { CheckCircle } from '@phosphor-icons/react';

interface ConsultationBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationBookingModal: React.FC<ConsultationBookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    phone: '',
    propertyType: 'Residencial de Alta Gama',
    location: '',
    budgetRange: '$100k - $250k USD',
    preferredDate: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await api.createConsultation(formData);
      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Error al procesar solicitud');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      clientName: '',
      email: '',
      phone: '',
      propertyType: 'Residencial de Alta Gama',
      location: '',
      budgetRange: '$100k - $250k USD',
      preferredDate: '',
      message: '',
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title="Agendar Consulta Espacial"
      subtitle="Inicia una conversación privada con la Arq. Martina Delpapa"
      maxWidth="lg"
    >
      {isSuccess ? (
        <div className="py-8 flex flex-col items-center text-center gap-4">
          <div className="p-4 bg-emerald-100 text-emerald-800 rounded-full">
            <CheckCircle size={40} weight="fill" />
          </div>
          <h4 className="font-serif text-2xl text-obsidian-900 font-normal">
            Solicitud Registrada con Éxito
          </h4>
          <p className="text-xs sm:text-sm text-obsidian-900/70 max-w-md leading-relaxed font-light">
            Nos pondremos en contacto dentro de las próximas 24 horas hábiles para coordinar la reunión inicial de briefing arquitectónico.
          </p>
          <Button variant="primary" size="md" onClick={handleReset} className="mt-4">
            Volver al Estudio
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Nombre y Apellido"
              required
              placeholder="ej: Santiago Beras"
              value={formData.clientName}
              onChange={e => setFormData({ ...formData, clientName: e.target.value })}
            />
            <Input
              label="Correo Electrónico"
              type="email"
              required
              placeholder="ej: santiago@empresa.com"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Teléfono / WhatsApp"
              placeholder="+54 11 1234-5678"
              value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
            />
            <Input
              label="Ubicación de la Propiedad"
              placeholder="ej: Recoleta, CABA o Punta del Este"
              value={formData.location}
              onChange={e => setFormData({ ...formData, location: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-xs uppercase tracking-architectural text-obsidian-900/80 font-medium">
                Tipo de Inmueble
              </label>
              <select
                className="bg-white/80 border border-obsidian-900/15 focus:border-bronze-500 px-3.5 py-2.5 text-sm text-obsidian-900 focus:outline-none rounded-none"
                value={formData.propertyType}
                onChange={e => setFormData({ ...formData, propertyType: e.target.value })}
              >
                <option value="Residencial de Alta Gama">Residencial de Alta Gama (Piso o Casa)</option>
                <option value="Penthouse / Triplex">Penthouse / Triplex</option>
                <option value="Villa Costera / Finca">Villa Costera / Finca de Campo</option>
                <option value="Hospitality / Hotel Boutique">Hospitality / Hotel Boutique</option>
                <option value="Oficinas Corporativas Boutique">Oficinas Corporativas Boutique</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-xs uppercase tracking-architectural text-obsidian-900/80 font-medium">
                Presupuesto Estimado de Obra
              </label>
              <select
                className="bg-white/80 border border-obsidian-900/15 focus:border-bronze-500 px-3.5 py-2.5 text-sm text-obsidian-900 focus:outline-none rounded-none"
                value={formData.budgetRange}
                onChange={e => setFormData({ ...formData, budgetRange: e.target.value })}
              >
                <option value="$50k - $100k USD">$50,000 - $100,000 USD</option>
                <option value="$100k - $250k USD">$100,000 - $250,000 USD</option>
                <option value="$250k - $500k USD">$250,000 - $500,000 USD</option>
                <option value="$500k+ USD">$500,000+ USD</option>
              </select>
            </div>
          </div>

          <TextArea
            label="Detalles de la Visión o Necesidades"
            placeholder="Describe metros cuadrados, requerimientos especiales, si necesitas renders 3D o dirección de obra completa..."
            rows={3}
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
          />

          <div className="hairline-t pt-4 flex items-center justify-end gap-3">
            <Button type="button" variant="ghost" size="md" onClick={handleReset}>
              Cancelar
            </Button>
            <Button type="submit" variant="primary" size="md" isLoading={isLoading}>
              Enviar Solicitud
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
