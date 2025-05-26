import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi2";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filtter / sort</p>
      </Row>

      <Row>
        <CabinTable />
        <Button onClick={() => setShowForm(!showForm)}>
          {showForm === false ? (
            <>
              <HiOutlinePlusCircle /> Add New Cabin
            </>
          ) : (
            <>
              <HiOutlineMinusCircle /> Cancel Add New Cabin
            </>
          )}
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
