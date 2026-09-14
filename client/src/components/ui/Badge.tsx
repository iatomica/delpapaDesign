import React from 'react';

interface BadgeProps {
  status: 'draft' | 'review' | 'approved' | 'revision_requested' | 'completed' | 'in_progress' | 'pending';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({ status, size = 'md' }) => {
  const labels: Record<BadgeProps['status'], string> = {
    draft: 'Borrador Concepto',
    review: 'En Revisión',
    approved: 'Aprobado',
    revision_requested: 'Revisión Solicitada',
    completed: 'Completado',
    in_progress: 'En Ejecución',
    pending: 'Pendiente',
  };

  const styles: Record<BadgeProps['status'], string> = {
    draft: 'bg-stone-200 text-stone-800 border-stone-300',
    review: 'bg-amber-100 text-amber-900 border-amber-300',
    approved: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    revision_requested: 'bg-rose-100 text-rose-900 border-rose-300',
    completed: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    in_progress: 'bg-bronze-100 text-bronze-900 border-bronze-300',
    pending: 'bg-stone-100 text-stone-700 border-stone-200',
  };

  const sizeStyle = size === 'sm' ? 'text-[10px] px-2 py-0.5' : 'text-xs px-2.5 py-1';

  return (
    <span className={`inline-flex items-center font-medium tracking-wide uppercase border rounded-none ${sizeStyle} ${styles[status]}`}>
      {labels[status]}
    </span>
  );
};
