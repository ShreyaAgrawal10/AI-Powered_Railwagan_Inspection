const HomeImapct = () => {
    return (
      <div className="bg-gray-100 min-h-screen m-10">
        <header className="bg-blue-600 text-white py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">Rail Wagon Crack Analysis</h1>
          </div>
        </header>
  
        <main className="container mx-auto px-4 py-8">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Impact of Cracks in Rail Wagons on the Company</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  Cracks in rail wagons can have serious implications for the company, affecting operations, safety,
                  costs, and reputation. Below is a detailed analysis of the potential impacts:
                </p>
                <img
                  src="./src/assets/images/Crack.jpg"
                  alt="Cracked Rail Wagon"
                  className="w-full h-[67vh] rounded-lg shadow-md mb-4 object-cover"
                />
              </div>
              <div className="space-y-4">
                <ImpactCard
                  title="Operational Disruptions"
                  items={["Delays in Transportation", "Reduced Efficiency", "Breakdowns & Unplanned Maintenance"]}
                />
                <ImpactCard
                  title="Safety Hazards"
                  items={["Structural Failure", "Cargo Damage & Loss", "Accidents & Legal Liabilities"]}
                />
                <ImpactCard
                  title="Financial Implications"
                  items={["Higher Maintenance & Repair Costs", "Replacement Costs", "Penalties for Delayed Deliveries"]}
                />
                <ImpactCard
                  title="Reputation Damage"
                  items={["Customer Trust Issues", "Regulatory Scrutiny", "Loss of Business"]}
                />
              </div>
            </div>
          </section>
  
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Problems the Company Will Face Due to Cracks</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <ProblemCard
                  title="Identifying & Monitoring Cracks"
                  description="Requires investment in advanced inspection technologies and regular manual inspections, increasing labor costs."
                />
                <ProblemCard
                  title="Balancing Repair vs. Replacement"
                  description="Difficult decisions on whether to repair cracks or retire wagons. High cost of spare parts and maintenance services."
                />
                <ProblemCard
                  title="Regulatory Compliance"
                  description="Government safety standards must be met; failure could lead to fines or a ban on operations. Need for thorough documentation."
                />
                <ProblemCard
                  title="Supply Chain & Logistics Delays"
                  description="Reduced fleet capacity affects transportation schedules. Increased demand for alternative transport methods."
                  />
                <ProblemCard
                  title="Employee & Passenger Safety Concerns"
                  description="Need for enhanced worker safety protocols and training requirements for employees to detect and address cracks efficiently."
                  />
                      </div>
                  <div className="space-y-4">
                <img
                  src="./src/assets/images/Inspection.jpg"
                  alt="Rail Wagon Inspection"
                  className="w-full h-[82vh] rounded-lg shadow-md object-cover"
                />
              </div>
            </div>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p>
                Cracks in rail wagons can create significant financial, operational, and safety challenges for a company.
                The best approach to mitigate these issues is{" "}
                <strong>early detection, proactive maintenance, and investment in modern monitoring technologies.</strong>
              </p>
            </div>
          </section>
        </main>
      </div>
    )
  }
  
  const ImpactCard = ({ title, items }) => (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <ul className="list-disc pl-5">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
  
  const ProblemCard = ({ title, description }) => (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  )
  
  export default HomeImapct
  
  