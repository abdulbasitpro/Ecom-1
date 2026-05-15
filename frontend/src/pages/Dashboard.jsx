import React, { useState, useEffect } from 'react';
import { useProducts } from '../context/ProductContext';

const Dashboard = () => {
  const { products: productList, addProduct, updateProduct, deleteProduct } = useProducts();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Revenue', value: 'Rs 125,400', change: '+12.5%', color: 'bg-blue-500' },
    { label: 'Orders', value: '45', change: '+5.2%', color: 'bg-purple-500' },
    { label: 'Customers', value: '1,280', change: '+18.7%', color: 'bg-green-500' },
    { label: 'Conversion Rate', value: '3.2%', change: '-2.1%', color: 'bg-orange-500' },
  ];

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id);
    }
  };

  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '', status: 'In Stock', image: null });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct({ ...newProduct, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    addProduct({ ...newProduct, price: `Rs ${newProduct.price}`, image: newProduct.image || '/wallet.png' });
    setShowAddModal(false);
    setNewProduct({ name: '', price: '', stock: '', status: 'In Stock', image: null });
  };

  const [showEditModal, setShowEditModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEditClick = (product) => {
    const numericPrice = product.price.replace('Rs ', '');
    setEditingProduct({ ...product, price: numericPrice });
    setShowEditModal(true);
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    updateProduct({ ...editingProduct, price: `Rs ${editingProduct.price}` });
    setShowEditModal(false);
    setEditingProduct(null);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const adminUser = import.meta.env.VITE_ADMIN_USER;
    const adminPass = import.meta.env.VITE_ADMIN_PASS;

    if (username === adminUser && password === adminPass) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid credentials. Access denied.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#fcfcfc] flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-[3rem] shadow-2xl shadow-gray-200/50 p-12 border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Admin Portal</h2>
            <p className="text-gray-400 text-sm uppercase tracking-widest font-medium">Secure Access Required</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4 mb-2 block">Username</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-black transition-colors"
                placeholder="Enter username"
                required
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4 mb-2 block">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-black transition-colors pr-14"
                  placeholder="••••••••"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.822 7.822L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            
            {error && <p className="text-red-500 text-[10px] font-bold uppercase text-center tracking-wider">{error}</p>}
            
            <button 
              type="submit"
              className="w-full bg-black text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg shadow-black/10"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (activeTab === 'overview') {
      return (
        <>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">{stat.label}</p>
                <div className="flex justify-between items-end">
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <span className={`text-[10px] font-bold ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change}
                  </span>
                </div>
                <div className="mt-6 w-full h-1 bg-gray-50 rounded-full overflow-hidden">
                  <div className={`h-full ${stat.color} w-2/3 group-hover:w-full transition-all duration-1000`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Products */}
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-gray-50 flex justify-between items-center">
              <h3 className="font-bold uppercase tracking-widest text-sm">Recent Activity</h3>
              <button onClick={() => setActiveTab('products')} className="text-[10px] font-bold uppercase tracking-widest text-blue-500 hover:underline">
                Manage Products
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50/50 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <tr>
                    <th className="px-8 py-4">Product</th>
                    <th className="px-8 py-4">Stock</th>
                    <th className="px-8 py-4">Price</th>
                    <th className="px-8 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {productList.slice(0, 3).map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50/30 transition-colors group">
                      <td className="px-8 py-6 font-medium">{product.name}</td>
                      <td className="px-8 py-6 text-gray-500">{product.stock}</td>
                      <td className="px-8 py-6 font-bold">{product.price}</td>
                      <td className="px-8 py-6">
                        <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${product.status === 'In Stock' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          {product.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      );
    }

    if (activeTab === 'products') {
      return (
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold uppercase tracking-widest">Product Catalog</h2>
            <button 
              onClick={() => setShowAddModal(true)}
              className="bg-black text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg shadow-black/20"
            >
              + Add New Product
            </button>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50/50 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <tr>
                    <th className="px-8 py-4 text-center">Img</th>
                    <th className="px-8 py-4">Product Name</th>
                    <th className="px-8 py-4">Stock</th>
                    <th className="px-8 py-4">Price</th>
                    <th className="px-8 py-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {productList.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50/30 transition-colors group">
                      <td className="px-8 py-6 flex justify-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-xl overflow-hidden">
                          <img src={product.image} alt="" className="w-full h-full object-cover" />
                        </div>
                      </td>
                      <td className="px-8 py-6 font-bold">{product.name}</td>
                      <td className="px-8 py-6 text-gray-500">{product.stock} units</td>
                      <td className="px-8 py-6 font-bold text-black">{product.price}</td>
                      <td className="px-8 py-6">
                        <div className="flex items-center justify-center gap-4">
                          <button 
                            onClick={() => handleEditClick(product)}
                            className="text-[10px] font-bold uppercase tracking-widest text-blue-500 hover:underline"
                          >
                            Update
                          </button>
                          <button 
                            onClick={() => handleDelete(product.id)}
                            className="text-[10px] font-bold uppercase tracking-widest text-red-500 hover:underline"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center py-24 text-gray-400">
        <p className="text-sm font-bold uppercase tracking-widest">Section under development</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-8 hidden md:block">
        <h2 className="text-2xl font-bold mb-12 tracking-tight">Meers Admin</h2>
        <nav className="space-y-6 text-sm">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`block w-full text-left font-bold uppercase tracking-widest ${activeTab === 'overview' ? 'text-white' : 'text-gray-500 hover:text-white transition-colors'}`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('products')}
            className={`block w-full text-left font-bold uppercase tracking-widest ${activeTab === 'products' ? 'text-white' : 'text-gray-500 hover:text-white transition-colors'}`}
          >
            Products
          </button>
          <button 
            onClick={() => setActiveTab('orders')}
            className={`block w-full text-left font-bold uppercase tracking-widest ${activeTab === 'orders' ? 'text-white' : 'text-gray-500 hover:text-white transition-colors'}`}
          >
            Orders
          </button>
          <button 
            onClick={handleLogout}
            className="block w-full text-left font-bold uppercase tracking-widest text-red-400 hover:text-red-300 transition-colors mt-20"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 md:p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2 uppercase">{activeTab}</h1>
            <p className="text-gray-500 text-sm">Manage your store's inventory and performance.</p>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
            <span>Admin Mode</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </header>

        {renderContent()}
      </main>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-[3rem] w-full max-w-lg p-12 shadow-2xl animate-in fade-in zoom-in duration-300">
            <h2 className="text-2xl font-bold mb-8 uppercase tracking-tight">Add New Product</h2>
            <form onSubmit={handleAddProduct} className="space-y-6">
              <div className="flex justify-center mb-8">
                <div className="relative group w-32 h-32 bg-gray-50 border-2 border-dashed border-gray-100 rounded-[2rem] flex items-center justify-center overflow-hidden transition-all hover:border-black/20">
                  {newProduct.image ? (
                    <img src={newProduct.image} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center">
                      <div className="text-2xl mb-1">📸</div>
                      <p className="text-[8px] font-bold uppercase tracking-widest text-gray-400">Add Photo</p>
                    </div>
                  )}
                  <input 
                    type="file" 
                    onChange={handleImageChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    accept="image/*"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4 mb-2 block">Product Name</label>
                <input 
                  type="text" 
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-black transition-colors"
                  placeholder="e.g. Premium Leather Wallet"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4 mb-2 block">Price</label>
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">Rs</span>
                    <input 
                      type="number" 
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-6 py-4 outline-none focus:border-black transition-colors"
                      placeholder="2500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4 mb-2 block">Stock</label>
                  <input 
                    type="number" 
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-black transition-colors"
                    placeholder="10"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-4 pt-6">
                <button 
                  type="button" 
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 border border-gray-100 py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 bg-black text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-gray-800 transition-all shadow-lg"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Edit Product Modal */}
      {showEditModal && editingProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-[3rem] w-full max-w-lg p-12 shadow-2xl animate-in fade-in zoom-in duration-300">
            <h2 className="text-2xl font-bold mb-8 uppercase tracking-tight">Update Product</h2>
            <form onSubmit={handleUpdateProduct} className="space-y-6">
              <div className="flex justify-center mb-8">
                <div className="relative group w-32 h-32 bg-gray-50 border-2 border-dashed border-gray-100 rounded-[2rem] flex items-center justify-center overflow-hidden transition-all hover:border-black/20">
                  {editingProduct.image ? (
                    <img src={editingProduct.image} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center">
                      <div className="text-2xl mb-1">📸</div>
                      <p className="text-[8px] font-bold uppercase tracking-widest text-gray-400">Add Photo</p>
                    </div>
                  )}
                  <input 
                    type="file" 
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => setEditingProduct({ ...editingProduct, image: reader.result });
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    accept="image/*"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4 mb-2 block">Product Name</label>
                <input 
                  type="text" 
                  value={editingProduct.name}
                  onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-black transition-colors"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4 mb-2 block">Price</label>
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">Rs</span>
                    <input 
                      type="number" 
                      value={editingProduct.price}
                      onChange={(e) => setEditingProduct({...editingProduct, price: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-6 py-4 outline-none focus:border-black transition-colors"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4 mb-2 block">Stock</label>
                  <input 
                    type="number" 
                    value={editingProduct.stock}
                    onChange={(e) => setEditingProduct({...editingProduct, stock: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-black transition-colors"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-4 pt-6">
                <button 
                  type="button" 
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 border border-gray-100 py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 bg-black text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-gray-800 transition-all shadow-lg"
                >
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
