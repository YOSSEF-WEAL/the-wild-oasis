import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

export default function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", lable: "All" },
          { value: "no-discount", lable: "No Discount" },
          { value: "with-discount", lable: "With Discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name.asc", lable: "Sort By Name (A-Z)" },
          { value: "name.desc", lable: "Sort By Name (A-Z)" },
          { value: "regularPrice-asc", lable: "Sort By Price (Low First)" },
          { value: "regularPrice-desc", lable: "Sort By Price (High First)" },
          { value: "maxCapacity-asc", lable: "Sort By Price (Low First)" },
          { value: "maxCapacity-desc", lable: "Sort By Price (High First)" },
        ]}
      />
    </TableOperations>
  );
}
