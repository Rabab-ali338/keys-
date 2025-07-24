                       // CONSTRUCTOR FUNCTION FOR KEY OBJECT //
function EmployeesList(name, age, salary, designation, phone, address) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.designation = designation;
    this.phone = phone;
    this.address = address;
}

var arr = [
    new EmployeesList("Rabab Ali", 23, 50000, "Software Engineer", "0300-1234567", "Larkana, Sindh"),
    new EmployeesList("Ali Khan", 30, 60000, "Project Manager", "0310-2345678", "Karachi, Pakistan"),
    new EmployeesList("Sara Ahmed", 28, 55000, "UI/UX Designer", "0320-3456789", "Hyderabad, Sindh"),
    new EmployeesList("Bilal Shah", 35, 70000, "Data Scientist", "0330-4567890", "islamabad, Pakistan"),
    new EmployeesList("Fatima Noor", 26, 52000, "web Developer", "0340-5678901", "Multan, Punjab"),
    new EmployeesList("Hassan Ali", 29, 58000, "Devops Engineer", "0350-6789012", "Faisalabad, Punjab"),
    new EmployeesList("Ayesha Khan", 32, 62000, "System Analyst", "0360-7890123", "Quetta, balochistan"),
    new EmployeesList("Omar Farooq", 27, 54000, "network Engineer", "0370-8901234", "peshawar, KPK"),
    new EmployeesList("Zainab Bibi", 31, 61000, "Database Administrator", "0380-9012345", "Sukkur, sindh"),
    new EmployeesList("Tariq Hussain", 34, 65000, "Cloud Architect", "0345-1234567", "Gujranwala, Punjab"),
    new EmployeesList("Nida Rehman", 44, 72000, "Cybersecurity Specialist", "0390-2345678", "Sialkot, Punjab"),
    new EmployeesList("Usman Malik", 38, 68000, "IT Support Specialist", "0400-3456789", "lahore, Punjab"),
    new EmployeesList("kiran khan", 25, 53000, "business Analyst", "0410-4567890", "Rawalpindi, punjab"),
    new EmployeesList("Asad Ali", 33, 64000, "Software Tester", "0420-5678901", "gujrat, punjab"),
    new EmployeesList("Sana Mirza", 29, 59000, "product Manager", "0430-6789012", "Bahawalpur,punjab"),
    new EmployeesList("Danish Iqbal", 36, 66000, "technical writter", "0440-7890123", "Saragoda,punjab"),
    new EmployeesList("Amina khan", 24, 51000, "Quality Assurance Engineer", "0450-8901234", "Murdan,KPK"),
    new EmployeesList("Faisal Qureshi", 37, 70000, "Network Security Engineer", "0460-9012345", "Abbottabad, KPk"),
    new EmployeesList("Hina Baloch", 30, 62000, "IT project Coordinator", "0470-1234567", "Sibi, Balochistan"),
    new EmployeesList("Rizwan Ali", 39, 69000, "Business Intelligence Analyst", "0480-2345678", "Dera Ismail khan, KPk"),
    new EmployeesList("Sadia khan", 31, 63000, "Mobile App Developer", "0490-3456789", "Mardan, KPk",),
    new EmployeesList("kamran Shah", 28, 58000, "Game Developer", "0500-4567890", "Nowshera,KPk"),
    new EmployeesList("Zara Ali", 22, 50000, "Front-end Developer", "0500-5678901", "Chitral, KPk"),
    new EmployeesList("Muhammad Asif", 40, 78000, "back-end Developer", "0456-6789012", "Sawat"),
    new EmployeesList("Ayesha bibi", 26, 56000, "Full Stack Developer", "0510-7890123", "Kalat, Balochistan"),
    new EmployeesList("Syed Zohaib", 34, 89000, "IT Consultant", "0520-4567890", "karachi"),
    new EmployeesList("nadia Abro", 29, 67000, "Data Analyst", "0330-3456789", "shahkreem,sindh"),
    new EmployeesList("maham khan", 35, 89000, "Graphic Designer", "0345-567890", "Quetta"),
    new EmployeesList("Mustafa Ali", 42, 760000, "SEO Specialist", "0345-5678901", "Defance, karachi"),
    new EmployeesList("Sadia Baloch", 38, 72000, "Digital Marketing Specialist", "0350-6789012", "punjgor,Balochistan"),
    new EmployeesList("Ali Muhammad", 30, 65000, "IT Operation Manager", "0460-7890543", "thatta, sindh"),
    new EmployeesList("Hira khan", 27, 56000, "Technical Support Engineer", "0460-4567890", "Mirpur, Azad kashmir"),
    new EmployeesList("burhan Ali", 33, 60000, "Systems Administrator", "0470-5678901", "Gawadar, Balochistan"),
    new EmployeesList("Sanaullah khan", 31, 67000, "IT Consultant", "0400-6789012", "kohat, KPk"),
    new EmployeesList("Rashid Ali", 39, 72000, "Cloud Engineer", "0410-7896012", "Dadu, sindh"),
    new EmployeesList("Bushra jatoi", 28, 90000, "Senoir Architect", "0450-8976543", "Larkana, sindh"),
    new EmployeesList("tahir Ali", 55, 150000, "Deputy Director", "0430-1234567", "karachi,Pakistan"),
    new EmployeesList("Sadia Noor", 45, 80000, "Cheif Technology Officer", "0330-4567890", "Islamabad,Pakistan"),
    new EmployeesList("Seemal Rehan", 50, 1000000, "Cheif Excutive Officer", "0320-6789012", "Lahore, Pakistan"),
    new EmployeesList("Roshan Ali", 47, 58000, "IT Officer", "0313-3456789", "Quetta,balochistan"),
    new EmployeesList("Areeba khan", 29, 67000, "Event Coordinator", "0330-5678901", "karachi,pakistan"),
    new EmployeesList("Batool Zehra", 39, 72000, "HR Manager", "0340-6789012", "Hyderabad, sindh"),
    new EmployeesList("Fahad Ali", 36, 68000, "Business Development Manager", "0345-6789012","Lahore, punjab"),
    new EmployeesList("Syeda Fatima", 41, 780000, "front-desk Excetive", "0345-6789045", "Multan,"),
    new EmployeesList("Adeel Sommrro", 32, 67000, "Content Writter", "0345-6789045", "Sukkur, sindh"),
    new EmployeesList("Hina Bibi", 30, 68000, "Social Media Manager", "0345-6789023", "Faisalabad, punjab"),
    new EmployeesList("Fariyal Barakat", 34, 76000, "Customer Support Specialist", "0345-6789012", "Gujranwala, punjab"),
    new EmployeesList("Manahil khan", 28, 56000, "Sales Executive", "0345-6789045", "Sialkot, punjab"),
    new EmployeesList("Saqib Ali", 37, 78000, "Logistices Coordinator", "0345-6789034", "Rawalpindi"),
    new EmployeesList("Areej Baloch", 29, 67000, "Research Analyst", "0345-6789023", "Bolan, Balochistan"),
];
console.log(arr);

                                      // 50 KEYS OBJECT COMPLETED //
