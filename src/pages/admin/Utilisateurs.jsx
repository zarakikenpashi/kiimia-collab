import { useEffect, useState } from 'react';
import { Pencil, Search, Trash2, Check, X, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { deleteAdministrator, getAdministrators } from '../../services/adminService';
import Badge from '../../components/ui/Badge';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../../components/ui/Dialog';
import { Button } from '../../components/ui/Button';








function Utilisateurs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [users, setUsers] = useState([]);
  
  // États pour le dialog de suppression
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getAdministrators();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteClick = (user) => {
    console.log(user);
    setUserToDelete(user);
    setDeleteDialog(true);
  };


  const handleConfirmDelete = async () => {
    if (userToDelete) {
      await deleteAdministrator(userToDelete.id);
      setUsers(users.filter(u => u.id !== userToDelete.id));
    }
    
    setDeleteDialog(false);
    setUserToDelete(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Success':
        return 'text-green-700 bg-green-50';
      case 'Processing':
        return 'text-blue-700 bg-blue-50';
      case 'Failed':
        return 'text-red-700 bg-red-50';
      default:
        return 'text-gray-700 bg-gray-50';
    }
  };

  return (
    <div className="w-full mx-auto p-3 sm:p-6 bg-white min-h-screen">
      {/* Header with search and columns button */}
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Filter emails..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
        <Link
          to="/admin/nouveaupartenaire" 
          className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-primary border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
          Partenaire
        </Link>
        <Link 
          to="/admin/nouveauadmin"
          className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
          Administrateur
        </Link>
      </div>

      {/* Table with horizontal scroll */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
                  Nom prénom
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
                  Role
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
                  Statut
                </th>
                <th className="w-12 px-4 py-3 sticky right-0 bg-gray-50 z-10"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                     {user.name}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 whitespace-nowrap">
                    {user.email}
                  </td>
                  <td className="px-4 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">
                    <Badge variant="default">{user.role}</Badge>
                  </td>
                  <td className="px-4 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">
                    <Badge variant="success">
                      <Check size={12} />
                      Actif
                    </Badge>
                  </td>
                  <td className="px-4 py-2">
                    <div className='flex gap-2'>
                      <Link
                      to={`/admin/aditeradmin/${user.id}`}
                        className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors bg-blue-50"
                      >
                        <Pencil className="w-4 h-4 text-blue-700" />
                      </Link>
                      <button
                        onClick={() => handleDeleteClick(user)}
                        className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors bg-red-50"
                      >
                        <Trash2 className="w-4 h-4 text-red-700" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600">
        <div className="text-center sm:text-left">
          {selectedRows.size} of {filteredUsers.length} row(s) selected.
        </div>
        <div className="flex gap-2">
          <button className="px-3 sm:px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm">
            Previous
          </button>
          <button className="px-3 sm:px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm">
            Next
          </button>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialog} onOpenChange={setDeleteDialog}>
        <DialogContent className="max-w-md">
          <DialogClose onClose={() => setDeleteDialog(false)} />
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                <AlertCircle className="h-5 w-5 text-red-600" />
              </div>
              <DialogTitle>Confirmer la suppression</DialogTitle>
            </div>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer cet utilisateur ? Cette action est irréversible.
            </DialogDescription>
          </DialogHeader>
          
          {userToDelete && (
            <div className="px-6 pb-4">
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
                <p className="text-sm font-medium text-gray-900 mb-1">
                  {userToDelete.name}
                </p>
                <p className="text-sm text-gray-600">
                  {userToDelete.email}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Rôle: {userToDelete.role}
                </p>
              </div>
            </div>
          )}
          
          <div className="p-6 pt-0">
            <div className="rounded-lg bg-red-50 border border-red-200 p-4">
              <p className="text-sm text-red-800 font-medium mb-1">
                ⚠️ Action irréversible
              </p>
              <p className="text-sm text-red-700">
                Toutes les données associées à cet utilisateur seront définitivement perdues.
              </p>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialog(false)}>
              Annuler
            </Button>
            <Button variant="destructive" onClick={handleConfirmDelete}>
              <Trash2 size={16} className="mr-2" />
              Supprimer définitivement
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Utilisateurs;