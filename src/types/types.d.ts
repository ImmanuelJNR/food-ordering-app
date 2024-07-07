export interface MenuItem {
  id: number; 
  name: string;
  image: string;
  price: number;
  category: string;
  
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export interface MenuData {
  tabs: MenuCategory[];
}

export interface CartItem extends MenuItem {
  count: number;
}


export interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (index: number) => void;
  updateItemCount: (index: number, count: number) => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  getTotalItemCount: () => number;
  openSummary: () => void; // corrected here
  closeSummary: () => void; // add this as well
  isSummaryOpen: boolean; // add this as well
  total: number;
  isSuccessModalVisible: boolean; // Add this line
  showSuccessModal: () => void; // Add this line
  hideSuccessModal: () => void; // Add this line

  email: string;
  setEmail: (email: string) => void;
}

export interface SuccessModalProps {
  onClose: () => void;
}