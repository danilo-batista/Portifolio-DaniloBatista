import { useEffect, useId, useRef, useState } from 'react';

export function useMenu() {
  const menuId = useId();

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  /* Função que fecha o menu mobile após o clique. */
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  /* Função que fecha o menu mobile após pressionar a tecla Esc. */
  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  };

  /* Escuta os cliques do documento e quando captura o clique fora do Menu, ele o fecha. */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  return { isOpen, setIsOpen, menuRef, menuId, handleLinkClick, handleKeyDown };
}
