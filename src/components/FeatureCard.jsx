const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-text-dark mb-3">{title}</h3>
      <p className="text-text-muted leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
