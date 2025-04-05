import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const HomeAnalytics = () => {
  const financialData = [
    { name: "JK Lakshmi Cement", revenue: 5000, profit: 300 },
    { name: "Udaipur Cement", revenue: 700, profit: 50 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        JK Lakshmi Cement & Udaipur Cement Analytics
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <CompanyProfile
          name="JK Lakshmi Cement"
          founded="1982"
          headquarters="New Delhi, India"
          products={["OPC", "PPC", "Ready-Mix Concrete (RMC)", "AAC Blocks"]}
          website="www.jklakshmicement.com"
          path="./src/assets\images\jk_lakshmi.png"
          />
        <CompanyProfile
          name="Udaipur Cement Works Limited (UCWL)"
          founded="1993"
          headquarters="Udaipur, Rajasthan, India"
          products={["OPC", "PPC Cement"]}
          website="www.udaipurcement.com"
          path="./src/assets\images\Udaipur-Cement.avif"
        />
      </div>

      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Market Analysis</h2>
        <h3 className="text-xl font-semibold mb-2">Market Share & Presence</h3>
        <p className="mb-4">
          <strong>JK Lakshmi Cement:</strong> Operates across multiple states in
          India with a strong distribution network and manufacturing plants in
          Rajasthan, Gujarat, Chhattisgarh, and Haryana.
        </p>
        <p className="mb-4">
          <strong>Udaipur Cement:</strong> Has a localized presence, primarily
          focusing on Rajasthan and neighboring regions.
        </p>
        <h3 className="text-xl font-semibold mb-2">Production Capacity</h3>
        <p className="mb-2">
          <strong>JK Lakshmi Cement:</strong> Over 13+ million tons per annum
          (MTPA).
        </p>
        <p>
          <strong>Udaipur Cement:</strong> Approximately 2.2 MTPA.
        </p>
      </div>

      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Financial Performance (FY 2023)
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={financialData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#8884d8" name="Revenue (₹ crores)" />
            <Bar dataKey="profit" fill="#82ca9d" name="Net Profit (₹ crores)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <SustainabilityCard
          company="JK Lakshmi Cement"
          initiatives={[
            "Uses alternative fuels and raw materials to reduce carbon footprint.",
            "Implements water conservation techniques in cement production.",
            "Actively involved in corporate social responsibility (CSR) projects.",
          ]}
        />
        <SustainabilityCard
          company="Udaipur Cement"
          initiatives={[
            "Focuses on energy-efficient manufacturing practices.",
            "Undertakes tree plantation drives and environmental awareness programs.",
          ]}
        />
      </div>

      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Competitive Landscape</h2>
        <h3 className="text-xl font-semibold mb-2">Strengths</h3>
        <p className="mb-4">
          <strong>JK Lakshmi Cement:</strong> Wide distribution network,
          diversified product range, strong brand presence.
        </p>
        <p className="mb-4">
          <strong>Udaipur Cement:</strong> Stronghold in Rajasthan,
          cost-effective operations.
        </p>
        <h3 className="text-xl font-semibold mb-2">Challenges</h3>
        <p>
          Both companies face raw material cost fluctuations and intense market
          competition from giants like UltraTech Cement and ACC Cement.
        </p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p>
          JK Lakshmi Cement is a larger, more diversified player with a national
          footprint, whereas Udaipur Cement operates on a smaller scale with a
          strong regional presence. Both companies are investing in
          sustainability and efficiency to remain competitive in the evolving
          cement industry.
        </p>
      </div>
    </div>
  );
};

const CompanyProfile = ({ name, founded, headquarters, products, website,path }) => (
  <div className="bg-white shadow rounded-lg p-6 flex flex-row">
    <div>
    <h2 className="text-2xl font-semibold mb-4">{name}</h2>
    <table className="w-full">
      <tbody>
        <tr>
          <td className="font-medium py-2">Founded</td>
          <td>{founded}</td>
        </tr>
        <tr>
          <td className="font-medium py-2">Headquarters</td>
          <td>{headquarters}</td>
        </tr>
        <tr>
          <td className="font-medium py-2">Key Products</td>
          <td>{products.join(", ")}</td>
        </tr>
        <tr>
          <td className="font-medium py-2">Website</td>
          <td>
            <a
              href={`https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {website}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    <div className="ml-4">
    <img src={path} alt="JK Lakshmi Cement" />
    </div>
  </div>
);

const SustainabilityCard = ({ company, initiatives }) => (
  <div className="bg-white shadow rounded-lg p-6">
    <h2 className="text-2xl font-semibold mb-4">
      Sustainability & ESG Initiatives
    </h2>
    <h3 className="text-xl font-semibold mb-2">{company}</h3>
    <ul className="list-disc pl-5">
      {initiatives.map((initiative, index) => (
        <li key={index} className="mb-2">
          {initiative}
        </li>
      ))}
    </ul>
  </div>
);

export default HomeAnalytics;
