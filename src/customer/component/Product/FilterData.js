export const category = [
  "Kỹ Năng Sống",
  "Trinh Thám",
  "IT",
  "Tâm Lý",
  "Tâm Linh - Tôn Giáo",
  "Truyện Tranh",
];

export const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "Kỹ Năng Sống", label: "Kỹ Năng Sống" },
      { value: "Trinh Thám", label: "Trinh Thám" },
      { value: "IT", label: "IT" },
      { value: "Tâm Lý", label: "Tâm Lý" },
      { value: "Tâm Linh - Tôn Giáo", label: "Tâm Linh - Tôn Giáo" },
      { value: "Truyện Tranh", label: "Truyện Tranh" },
    ],
  },

  {
    id: "author",
    name: "Author",
    options: [
      { value: "Nguyên Phong", label: "Nguyên Phong" },
      { value: "Hosie Nguyen", label: "Hosie Nguyen" },
      { value: "Lê Đỗ Quỳnh Hương", label: "Lê Đỗ Quỳnh Hương" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "$159 to $399" },
      { value: "399-999", label: "$399 to $999" },
      { value: "999-1999", label: "$999 to $1999" },
      { value: "1999-2999", label: "$1999 to $2999" },
      { value: "2999-3999", label: "$2999 to $3999" },
    ],
  },

  {
    id: "discount",
    name: "Discount Range",
    options: [
      {
        value: "10",
        label: "10% And Above",
      },
      { value: "20", label: "20% And Above" },
      { value: "30", label: "30% And Above" },
      { value: "40", label: "40% And Above" },
      { value: "50", label: "50% And Above" },
      { value: "60", label: "60% And Above" },
      { value: "70", label: "70% And Above" },
      { value: "80", label: "80% And Above" },
    ],
  },

  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out Of Stock" },
    ],
  },
];

export const sortOptions = [
  { name: "Price: Low to High", query: "price_low", current: false },
  { name: "Price: High to Low", query: "price_high", current: false },
];
