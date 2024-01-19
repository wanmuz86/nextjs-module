
const CategoryPosts = ({
  params,
  }:{
    params: {
      categories: string[]
    }
  }) => {
  return (
    <div>
      <h1>Category Posts</h1>
      <p>Categories: {params.categories.join(', ')}</p>
  
    </div>
  );
};

export default CategoryPosts;

