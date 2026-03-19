import React from 'react';
import { Member } from '../types';
import { ItemCard } from './ItemCard';

interface Props {
  items: Member[];
  onEdit: (m: Member) => void;
  onDelete: (id: number) => void;
}

export const ItemList: React.FC<Props> = ({ items, onEdit, onDelete }) => {
  if (items.length === 0) return <p>No hay miembros aún.</p>;
  return (
    <div>
      {items.map(m => (
        <ItemCard key={m.id} member={m} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};
