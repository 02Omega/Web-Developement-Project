const categories = ['Apartments', 'Houses', 'Commercial', 'Land'];

const Categories = () => {
  return (
    <div className="overflow-x-scroll whitespace-nowrap p-4">
      {categories.map((category, index) => (
        <div key={index} className="inline-block mr-4 bg-blue-200 p-2 rounded">
          {category}
        </div>
      ))}
    </div>
  );
};

export default Categories;
