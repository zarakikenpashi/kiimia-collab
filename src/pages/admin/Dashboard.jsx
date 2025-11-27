import { useState } from 'react';
import { MoreHorizontal, Pencil, Search, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState(new Set());


  const payments = [
    { id: 1, status: 'Success', email: 'ken99@example.com', amount: 316.00 },
    { id: 2, status: 'Success', email: 'abe45@example.com', amount: 242.00 },
    { id: 3, status: 'Processing', email: 'monserrat44@example.com', amount: 837.00 },
    { id: 4, status: 'Success', email: 'silas22@example.com', amount: 874.00 },
    { id: 5, status: 'Failed', email: 'carmella@example.com', amount: 721.00 },
  ];

  const filteredPayments = payments.filter(payment =>
    payment.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleRow = (id) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const toggleAll = () => {
    if (selectedRows.size === filteredPayments.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(filteredPayments.map(p => p.id)));
    }
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
          to="/admin/new-partenaire" 
          className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-primary border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
          Partenaire
        </Link>
        <Link 
          to="/admin/new-admin"
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
                <th className="w-12 px-4 py-3 sticky left-0 bg-gray-50 z-10">
                  <input
                    type="checkbox"
                    checked={selectedRows.size === filteredPayments.length && filteredPayments.length > 0}
                    onChange={toggleAll}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
                  Amount
                </th>
                <th className="w-12 px-4 py-3 sticky right-0 bg-gray-50 z-10"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-2 sticky left-0 bg-white z-10">
                    <input
                      type="checkbox"
                      checked={selectedRows.has(payment.id)}
                      onChange={() => toggleRow(payment.id)}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 whitespace-nowrap">
                    {payment.email}
                  </td>
                  <td className="px-4 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">
                    ${payment.amount.toFixed(2)}
                  </td>
                  <td className="px-4 py-2">
                    <div className='flex gap-2'>
                      <Link
                        className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors bg-blue-50"
                      >
                        <Pencil className="w-4 h-4 text-blue-700" />
                      </Link>
                      <button
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
          {selectedRows.size} of {filteredPayments.length} row(s) selected.
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
    </div>
  );
}

export default Dashboard