import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const names = [
  "John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Charlie Davis",
  "Diana Evans", "Frank Green", "Grace Harris", "Henry Jackson", "Ivy King",
  "Jack Lee", "Karen Miller", "Larry Nelson", "Mona Owens", "Nina Parker",
  "Oscar Quinn", "Paul Roberts", "Quincy Scott", "Rachel Turner", "Steve Wilson",
];

const currencies = ["USD", "AED", "EUR", "GBP", "JPY"];

const getRandomDate = () => {
  const start = new Date(2020, 0, 1);
  const end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const mockDebtors = Array.from({ length: 20 }, (_, i) => ({
  name: names[i],
  amount: -(Math.random() * 5000).toFixed(2),
  currency: currencies[Math.floor(Math.random() * currencies.length)],
  date: getRandomDate().toLocaleString(),
}));

const mockCreditors = Array.from({ length: 20 }, (_, i) => ({
  name: names[i],
  amount: (Math.random() * 5000).toFixed(2),
  currency: currencies[Math.floor(Math.random() * currencies.length)],
  date: getRandomDate().toLocaleString(),
}));

export function TopDebtorsCreditors() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Debtors */}
      <Card className="bg-white dark:bg-[#1E1E2D] rounded-lg shadow-md">
        <CardHeader>
          <CardTitle className="text-red-500 dark:text-red-400">Top 20 Debtors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">
                    Amount
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">
                    Currency
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-[#2A2A3D] divide-y divide-gray-200 dark:divide-gray-700">
                {mockDebtors.map((debtor, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-200">{debtor.name}</td>
                    <td className="px-4 py-3 text-sm text-red-600 dark:text-red-400 font-medium">
                      ${debtor.amount}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{debtor.currency}</td>
                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{debtor.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Creditors */}
      <Card className="bg-white dark:bg-[#1E1E2D] rounded-lg shadow-md">
        <CardHeader>
          <CardTitle className="text-green-500 dark:text-green-400">Top 20 Creditors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">
                    Amount
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">
                    Currency
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-[#2A2A3D] divide-y divide-gray-200 dark:divide-gray-700">
                {mockCreditors.map((creditor, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-200">{creditor.name}</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400 font-medium">
                      ${creditor.amount}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{creditor.currency}</td>
                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{creditor.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
