import React, { FC, useState } from "react";
import CategoryAPI from "../../api/CategoryAPI";
import Category from "../../components/Category/Category";
import { ICategory } from "../../interfaces/ICategory";
import { Button } from "react-bootstrap";

const Home: FC = () => {
  const [categories, setCategories] = useState<any>([]); // ---> temp any
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(true);

  const getAllCategoriesHandler = async () => {
    try {
      setIsLoading(true);
      const res = await CategoryAPI.getAll();
      setCategories(res.data);
    } catch (error) {
      console.error(error); // ---> handle error later
    } finally {
      setIsLoading(false);
      setIsButtonVisible(false);
    }
  };

  const resetHandler = () => {
    setIsButtonVisible(true);
    setCategories([]);
  };

  return (
    <div>
      {!isLoading ? (
        categories?.map(({ id, name }: ICategory) => (
          <Category id={id} name={name} />
        ))
      ) : (
        <span>Loading...</span>
      )}

      {isButtonVisible && (
        <Button onClick={getAllCategoriesHandler}>Get All Categories</Button>
      )}

      {!isButtonVisible && <Button onClick={resetHandler}>Reset</Button>}
    </div>
  );
};

export default Home;
