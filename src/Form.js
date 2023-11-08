import Navbar from "./Navbar";
import Image from "./Img";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Filter from "./filter";

const studentsData = [
  {
    Name: "Nino Kapanadze",
    Status: "ACTIVE",
    Gender: "FEMALE",
    Grades: 89,
    ID_Number: 10001123456,
    Email_Address: "nino.kapanadze@gmail.com",
    Mobile_Number: "+995 (555) 123456",
    Address: "Tbilisi, Rustaveli Avenue 123",
    Date_of_Birth: "3 December 2002",
  },
  {
    Name: "Luka Tsertsvadze",
    Status: "ACTIVE",
    Gender: "MALE",
    Grades: 78,
    ID_Number: 10001234567,
    Email_Address: "luka.tsertsvadze@gmail.com",
    Mobile_Number: "+995 (571) 234567",
    Address: "Kutaisi, Bagrat III Street 456",
    Date_of_Birth: "25 June 2001",
  },
  {
    Name: "Ana Japaridze",
    Status: "INACTIVE",
    Gender: "FEMALE",
    Grades: 95,
    ID_Number: 10234123456,
    Email_Address: "ana.japaridze@gmail.com",
    Mobile_Number: "+995 (592) 345678",
    Address: "Batumi, Gogebashvili Street 789",
    Date_of_Birth: "7 November 2000",
  },
  {
    Name: "Giorgi Bagrationi",
    Status: "ACTIVE",
    Gender: "MALE",
    Grades: 80,
    ID_Number: 10004123456,
    Email_Address: "giorgi.bagrationi@gmail.com",
    Mobile_Number: "+995 (577) 456789",
    Address: "Rustavi, Chavchavadze Avenue 987",
    Date_of_Birth: "30 April 2002",
  },
  {
    Name: "Mariam Gorgadze",
    Status: "ACTIVE",
    Gender: "FEMALE",
    Grades: 92,
    ID_Number: 10005123456,
    Email_Address: "mariam.gorgadze@gmail.com",
    Mobile_Number: "+995 (555) 567890",
    Address: "Kobuleti, Griboedov Street 654",
    Date_of_Birth: "18 September 2001",
  },
  {
    Name: "Irakli Makashvili",
    Status: "INACTIVE",
    Gender: "MALE",
    Grades: 75,
    ID_Number: 10006123456,
    Email_Address: "irakli.makashvili@gmail.com",
    Mobile_Number: "+995 (571) 678901",
    Address: "Zugdidi, Queen Tamar Street 321",
    Date_of_Birth: "1 July 2002",
  },
  {
    Name: "Nana Kiknadze",
    Status: "ACTIVE",
    Gender: "FEMALE",
    Grades: 85,
    ID_Number: 10007123456,
    Email_Address: "nana.kiknadze@gmail.com",
    Mobile_Number: "+995 (592) 789012",
    Address: "Poti, Abashidze Street 852",
    Date_of_Birth: "28 December 2000",
  },
  {
    Name: "Tornike Khutsishvili",
    Status: "ACTIVE",
    Gender: "MALE",
    Grades: 87,
    ID_Number: 10008123456,
    Email_Address: "tornike.khutsishvili@gmail.com",
    Mobile_Number: "+995 (577) 890123",
    Address: "Telavi, Tsinandali Street 741",
    Date_of_Birth: "14 February 2001",
  },
  {
    Name: "Salome Chikovani",
    Status: "INACTIVE",
    Gender: "FEMALE",
    Grades: 78,
    ID_Number: 10009123456,
    Email_Address: "salome.chikovani@gmail.com",
    Mobile_Number: "+995 (555) 901234",
    Address: "Gori, Stalin Street 963",
    Date_of_Birth: "5 October 2002",
  },
  {
    Name: "Zurab Tskhovrebadze",
    Status: "ACTIVE",
    Gender: "MALE",
    Grades: 91,
    ID_Number: 10010123456,
    Email_Address: "zurab.tskhovrebadze@gmail.com",
    Mobile_Number: "+995 (571) 012345",
    Address: "Borjomi, Meskheti Street 1598",
    Date_of_Birth: "19 May 2001",
  },
  {
    Name: "Elene Kobakhidze",
    Status: "ACTIVE",
    Gender: "FEMALE",
    Grades: 83,
    ID_Number: 10211123456,
    Email_Address: "elene.kobakhidze@gmail.com",
    Mobile_Number: "+995 (592) 210987",
    Address: "Rustavi, Agmashenebeli Avenue 456",
    Date_of_Birth: "22 August 2002",
  },
  {
    Name: "Davit Chavchavadze",
    Status: "INACTIVE",
    Gender: "MALE",
    Grades: 79,
    ID_Number: 10012123456,
    Email_Address: "davit.chavchavadze@gmail.com",
    Mobile_Number: "+995 (577) 987654",
    Address: "Telavi, Erekle II Street 789",
    Date_of_Birth: "23 January 2001",
  },
  {
    Name: "Tamuna Berdzenishvili",
    Status: "ACTIVE",
    Gender: "FEMALE",
    Grades: 94,
    ID_Number: 10013123456,
    Email_Address: "tamuna.berdzenishvili@gmail.com",
    Mobile_Number: "+995 (555) 876543",
    Address: "Poti, Chachavadze Street 852",
    Date_of_Birth: "15 June 2002",
  },
  {
    Name: "Levan Abashidze",
    Status: "ACTIVE",
    Gender: "MALE",
    Grades: 88,
    ID_Number: 10014123456,
    Email_Address: "levan.abashidze@gmail.com",
    Mobile_Number: "+995 (571) 765432",
    Address: "Gori, Khimshiashvili Street 963",
    Date_of_Birth: "8 November 2001",
  },
  {
    Name: "Nino Dadiani",
    Status: "INACTIVE",
    Gender: "FEMALE",
    Grades: 76,
    ID_Number: 10015123456,
    Email_Address: "nino.dadiani@gmail.com",
    Mobile_Number: "+995 (592) 654321",
    Address: "Telavi, Pirosmani Street 741",
    Date_of_Birth: "30 March 2002",
  },
  {
    Name: "Giorgi Eristavi",
    Status: "ACTIVE",
    Gender: "MALE",
    Grades: 90,
    ID_Number: 10016123456,
    Email_Address: "giorgi.eristavi@gmail.com",
    Mobile_Number: "+995 (577) 543210",
    Address: "Borjomi, Tamar Mepe Street 357",
    Date_of_Birth: "12 September 2001",
  },
  {
    Name: "Keti Vardidze",
    Status: "ACTIVE",
    Gender: "FEMALE",
    Grades: 81,
    ID_Number: 10017123456,
    Email_Address: "keti.vardidze@gmail.com",
    Mobile_Number: "+995 (555) 432109",
    Address: "Rustavi, Tamar Mepe Avenue 258",
    Date_of_Birth: "28 May 2002",
  },
  {
    Name: "Revaz Zedginidze",
    Status: "INACTIVE",
    Gender: "MALE",
    Grades: 77,
    ID_Number: 10018123456,
    Email_Address: "revaz.zedginidze@gmail.com",
    Mobile_Number: "+995 (571) 321098",
    Address: "Poti, Leonidze Street 654",
    Date_of_Birth: "31 December 2001",
  },
  {
    Name: "Ana Avalishvili",
    Status: "ACTIVE",
    Gender: "FEMALE",
    Grades: 93,
    ID_Number: 10019123456,
    Email_Address: "ana.avalishvili@gmail.com",
    Mobile_Number: "+995 (592) 210987",
    Address: "Tbilisi, Agmashenebeli Avenue 123",
    Date_of_Birth: "9 August 2002",
  },
  {
    Name: "Gela Gvaramadze",
    Status: "ACTIVE",
    Gender: "MALE",
    Grades: 84,
    ID_Number: 10020123456,
    Email_Address: "gela.gvaramadze@gmail.com",
    Mobile_Number: "+995 (555) 987654",
    Address: "Kutaisi, Chavchavadze Street 987",
    Date_of_Birth: "14 February 2002",
  },
  {
    Name: "Maia Ioseliani",
    Status: "INACTIVE",
    Gender: "FEMALE",
    Grades: 74,
    ID_Number: 40225234567,
    Email_Address: "maia.ioseliani@gmail.com",
    Mobile_Number: "+995 (571) 876543",
    Address: "Telavi, Ilia Chavchavadze Street 741",
    Date_of_Birth: "27 June 2001",
  },
  {
    Name: "Levan Javakhishvili",
    Status: "ACTIVE",
    Gender: "MALE",
    Grades: 89,
    ID_Number: 12002612345,
    Email_Address: "levan.javakhishvili@gmail.com",
    Mobile_Number: "+995 (592) 765432",
    Address: "Borjomi, Giorgi Chitaia Street 357",
    Date_of_Birth: "20 November 2002",
  },
  {
    Name: "Tamar Kakhidze",
    Status: "ACTIVE",
    Gender: "FEMALE",
    Grades: 86,
    ID_Number: 10027123456,
    Email_Address: "tamar.kakhidze@gmail.com",
    Mobile_Number: "+995 (577) 654321",
    Address: "Rustavi, Vakhtang Gorgasali Avenue 258",
    Date_of_Birth: "2 April 2001",
  },
  {
    Name: "Irakli Kereselidze",
    Status: "INACTIVE",
    Gender: "MALE",
    Grades: 79,
    ID_Number: 12002412345,
    Email_Address: "irakli.kereselidze@gmail.com",
    Mobile_Number: "+995 (555) 543210",
    Address: "Poti, Konstantine Gamsakhurdia Street 654",
    Date_of_Birth: "23 December 2000",
  },
  {
    Name: "Tamara Lortkipanidze",
    Status: "ACTIVE",
    Gender: "FEMALE",
    Grades: 82,
    ID_Number: 30224123456,
    Email_Address: "tamara.lortkipanidze@gmail.com",
    Mobile_Number: "+995 (571) 432109",
    Address: "Gori, Akaki Tsereteli Street 963",
    Date_of_Birth: "15 July 2002",
  },
  {
    Name: "Giorgi Megrelishvili",
    Status: "ACTIVE",
    Gender: "MALE",
    Grades: 88,
    ID_Number: 40005552541,
    Email_Address: "giorgi.megrelishvili@gmail.com",
    Mobile_Number: "+995 (568) 454752",
    Address: "Tbilisi, Agmashenebeli Avenue 123",
    Date_of_Birth: "2 July 2000",
  },
  {
    Name: "Nino Orbeliani",
    Status: "INACTIVE",
    Gender: "FEMALE",
    Grades: 77,
    ID_Number: 10055478274,
    Email_Address: "nino.orbeliani@gmail.com",
    Mobile_Number: "+995 (571) 433009",
    Address: "Tbilisi, Rustaveli Street 12",
    Date_of_Birth: "5 April 2002",
  },
  {
    Name: "Sophio Beridze",
    Status: "ACTIVE",
    Gender: "FEMALE",
    Grades: 85,
    ID_Number: 10055123456,
    Email_Address: "sophio.beridze@gmail.com",
    Mobile_Number: "+995 (555) 112233",
    Address: "Kutaisi, Kostava Street 234",
    Date_of_Birth: "12 January 2003",
  },
  {
    Name: "Beso Chkhikvadze",
    Status: "ACTIVE",
    Gender: "MALE",
    Grades: 77,
    ID_Number: 10077123456,
    Email_Address: "beso.chkhikvadze@gmail.com",
    Mobile_Number: "+995 (577) 334455",
    Address: "Tbilisi, Chavchavadze Avenue 456",
    Date_of_Birth: "28 March 2002",
  },
  {
    Name: "Nana Gigauri",
    Status: "INACTIVE",
    Gender: "FEMALE",
    Grades: 72,
    ID_Number: 10234125879,
    Email_Address: "nana.gigauri@gmail.com",
    Mobile_Number: "+995 (592) 556677",
    Address: "Batumi, Griboedov Street 789",
    Date_of_Birth: "17 October 2001",
  },
  {
    Name: "Zura Tsurtsumia",
    Status: "ACTIVE",
    Gender: "MALE",
    Grades: 90,
    ID_Number: 10099123456,
    Email_Address: "zura.tsurtsumia@gmail.com",
    Mobile_Number: "+995 (571) 778899",
    Address: "Rustavi, Gamsakhurdia Avenue 345",
    Date_of_Birth: "9 June 2002",
  },
  {
    Name: "Nia Kalandadze",
    Status: "ACTIVE",
    Gender: "FEMALE",
    Grades: 88,
    ID_Number: 10066123456,
    Email_Address: "nia.kalandadze@gmail.com",
    Mobile_Number: "+995 (555) 889900",
    Address: "Kobuleti, King Tamar Street 456",
    Date_of_Birth: "23 September 2001",
  },
  {
    Name: "Irakli Japaridze",
    Status: "INACTIVE",
    Gender: "MALE",
    Grades: 76,
    ID_Number: 10021123456,
    Email_Address: "irakli.japaridze@gmail.com",
    Mobile_Number: "+995 (571) 001122",
    Address: "Zugdidi, Tsereteli Street 987",
    Date_of_Birth: "30 July 2002",
  },
  {
    Name: "Maia Gigineishvili",
    Status: "ACTIVE",
    Gender: "FEMALE",
    Grades: 82,
    ID_Number: 10081123456,
    Email_Address: "maia.gigineishvili@gmail.com",
    Mobile_Number: "+995 (592) 223344",
    Address: "Borjomi, Shota Rustaveli Street 159",
    Date_of_Birth: "15 December 2000",
  },
  {
    Name: "Vano Makharadze",
    Status: "INACTIVE",
    Gender: "MALE",
    Grades: 79,
    ID_Number: 10012121456,
    Email_Address: "vano.makharadze@gmail.com",
    Mobile_Number: "+995 (577) 445566",
    Address: "Gori, Meskheti Street 963",
    Date_of_Birth: "5 February 2003",
  },
  {
    Name: "Nino Beridze",
    Status: "ACTIVE",
    Gender: "FEMALE",
    Grades: 91,
    ID_Number: 10033123456,
    Email_Address: "nino.beridze@gmail.com",
    Mobile_Number: "+995 (555) 667788",
    Address: "Tbilisi, King Erekle Street 321",
    Date_of_Birth: "8 May 2001",
  },
  {
    Name: "Giorgi Nozadze",
    Status: "ACTIVE",
    Gender: "MALE",
    Grades: 84,
    ID_Number: 10078123456,
    Email_Address: "giorgi.nozadze@gmail.com",
    Mobile_Number: "+995 (577) 889900",
    Address: "Kutaisi, Tamar Mepe Avenue 654",
    Date_of_Birth: "21 September 2002",
  },
  {
    Name: "Mariam Kipiani",
    Status: "ACTIVE",
    Gender: "FEMALE",
    Grades: 87,
    ID_Number: 10123123456,
    Email_Address: "mariam.kipiani@gmail.com",
    Mobile_Number: "+995 (555) 123456",
    Address: "Tbilisi, Agmashenebeli Ave 123",
    Date_of_Birth: "12 March 2003",
  },
  {
    Name: "Giorgi Gogoladze",
    Status: "ACTIVE",
    Gender: "MALE",
    Grades: 80,
    ID_Number: 10234123457,
    Email_Address: "giorgi.gogoladze@gmail.com",
    Mobile_Number: "+995 (571) 234567",
    Address: "Kutaisi, Chavchavadze Street 456",
    Date_of_Birth: "23 September 2002",
  },
  {
    Name: "Nino Javakhishvili",
    Status: "INACTIVE",
    Gender: "FEMALE",
    Grades: 74,
    ID_Number: 10234123458,
    Email_Address: "nino.javakhishvili@gmail.com",
    Mobile_Number: "+995 (592) 345678",
    Address: "Batumi, Gogebashvili Street 789",
    Date_of_Birth: "17 November 2001",
  },
  {
    Name: "Zurab Tskitishvili",
    Status: "ACTIVE",
    Gender: "MALE",
    Grades: 91,
    ID_Number: 10234123459,
    Email_Address: "zurab.tskitishvili@gmail.com",
    Mobile_Number: "+995 (577) 456789",
    Address: "Rustavi, Chavchavadze Avenue 987",
    Date_of_Birth: "9 January 2002",
  },
  {
    Name: "Ana Beriashvili",
    Status: "ACTIVE",
    Gender: "FEMALE",
    Grades: 89,
    ID_Number: 10234123500,
    Email_Address: "ana.beriashvili@gmail.com",
    Mobile_Number: "+995 (555) 567890",
    Address: "Kobuleti, Griboedov Street 654",
    Date_of_Birth: "21 May 2001",
  },
  {
    Name: "Irakli Nadiradze",
    Status: "INACTIVE",
    Gender: "MALE",
    Grades: 76,
    ID_Number: 10234123501,
    Email_Address: "irakli.nadiradze@gmail.com",
    Mobile_Number: "+995 (571) 678901",
    Address: "Zugdidi, Queen Tamar Street 321",
    Date_of_Birth: "15 July 2002",
  },
  {
    Name: "Ketevan Kandelaki",
    Status: "ACTIVE",
    Gender: "FEMALE",
    Grades: 85,
    ID_Number: 10234123502,
    Email_Address: "ketevan.kandelaki@gmail.com",
    Mobile_Number: "+995 (592) 789012",
    Address: "Poti, Abashidze Street 852",
    Date_of_Birth: "28 December 2000",
  },
  {
    Name: "Revaz Kvirikashvili",
    Status: "ACTIVE",
    Gender: "MALE",
    Grades: 83,
    ID_Number: 10234123503,
    Email_Address: "revaz.kvirikashvili@gmail.com",
    Mobile_Number: "+995 (577) 890123",
    Address: "Telavi, Tsinandali Street 741",
    Date_of_Birth: "8 February 2001",
  },
  {
    Name: "Salome Gogolashvili",
    Status: "INACTIVE",
    Gender: "FEMALE",
    Grades: 78,
    ID_Number: 10234123504,
    Email_Address: "salome.gogolashvili@gmail.com",
    Mobile_Number: "+995 (555) 901234",
    Address: "Gori, Stalin Street 963",
    Date_of_Birth: "21 October 2002",
  },
  {
    Name: "Giorgi Jibladze",
    Status: "ACTIVE",
    Gender: "MALE",
    Grades: 90,
    ID_Number: 10234123505,
    Email_Address: "giorgi.jibladze@gmail.com",
    Mobile_Number: "+995 (571) 012345",
    Address: "Borjomi, Meskheti Street 1598",
    Date_of_Birth: "18 May 2001",
  },
  {
    Name: "Tamar Khurtsidze",
    Status: "ACTIVE",
    Gender: "FEMALE",
    Grades: 92,
    ID_Number: 10234123506,
    Email_Address: "tamar.khurtsidze@gmail.com",
    Mobile_Number: "+995 (555) 210987",
    Address: "Rustavi, Agmashenebeli Avenue 456",
    Date_of_Birth: "23 August 2002",
  },
  {
    Name: "Levan Chichinadze",
    Status: "INACTIVE",
    Gender: "MALE",
    Grades: 77,
    ID_Number: 10234123507,
    Email_Address: "levan.chichinadze@gmail.com",
    Mobile_Number: "+995 (577) 321098",
    Address: "Telavi, Erekle II Street 789",
    Date_of_Birth: "25 January 2001",
  },
  {
    Name: "Nino Kekelidze",
    Status: "ACTIVE",
    Gender: "FEMALE",
    Grades: 94,
    ID_Number: 10234123508,
    Email_Address: "nino.kekelidze@gmail.com",
    Mobile_Number: "+995 (555) 876543",
    Address: "Poti, Chachavadze Street 852",
    Date_of_Birth: "19 June 2002",
  },
  {
    Name: "Giorgi Lomidze",
    Status: "ACTIVE",
    Gender: "MALE",
    Grades: 88,
    ID_Number: 10234123509,
    Email_Address: "giorgi.lomidze@gmail.com",
    Mobile_Number: "+995 (571) 765432",
    Address: "Gori, Khimshiashvili Street 963",
    Date_of_Birth: "11 November 2001",
  },
  {
    Name: "Nana Tediashvili",
    Status: "INACTIVE",
    Gender: "FEMALE",
    Grades: 76,
    ID_Number: 10234123510,
    Email_Address: "nana.tediashvili@gmail.com",
    Mobile_Number: "+995 (592) 654321",
    Address: "Telavi, Pirosmani Street 741",
    Date_of_Birth: "5 April 2002",
  },
  {
    Name: "Zurab Shengelia",
    Status: "ACTIVE",
    Gender: "MALE",
    Grades: 85,
    ID_Number: 10234123511,
    Email_Address: "zurab.shengelia@gmail.com",
    Mobile_Number: "+995 (577) 543210",
    Address: "Borjomi, Tamar Mepe Street 357",
    Date_of_Birth: "29 September 2001",
  },
  {
    Name: "Elene Papava",
    Status: "ACTIVE",
    Gender: "FEMALE",
    Grades: 81,
    ID_Number: 10234123512,
    Email_Address: "elene.papava@gmail.com",
    Mobile_Number: "+995 (555) 432109",
    Address: "Rustavi, Tamar Mepe Avenue 258",
    Date_of_Birth: "3 May 2002",
  },
  {
    Name: "Vakhtang Malania",
    Status: "INACTIVE",
    Gender: "MALE",
    Grades: 75,
    ID_Number: 10234123513,
    Email_Address: "vakhtang.malania@gmail.com",
    Mobile_Number: "+995 (571) 321098",
    Address: "Poti, Leonidze Street 654",
    Date_of_Birth: "7 December 2001",
  },
  {
    Name: "Tinatin Arabidze",
    Status: "ACTIVE",
    Gender: "FEMALE",
    Grades: 90,
    ID_Number: 10234123514,
    Email_Address: "tinatin.arabidze@gmail.com",
    Mobile_Number: "+995 (592) 210987",
    Address: "Tbilisi, Agmashenebeli Avenue 123",
    Date_of_Birth: "11 August 2002",
  },
  {
    Name: "Lasha Chikhladze",
    Status: "ACTIVE",
    Gender: "MALE",
    Grades: 86,
    ID_Number: 10234123515,
    Email_Address: "lasha.chikhladze@gmail.com",
    Mobile_Number: "+995 (577) 654321",
    Address: "Kutaisi, Chavchavadze Street 987",
    Date_of_Birth: "20 February 2001",
  },
];

const sortedAscendedData = [...studentsData].sort(
  (a, b) => a.Grades - b.Grades
);
const sortedDescendedData = [...studentsData].sort(
  (a, b) => b.Grades - a.Grades
);

export default function Form() {
  const [formPage, setFormPage] = useState(true);
  const [curPage, setCurrPage] = useState(1);
  const resultsPerPage = 10;

  const [uploadedImage, setUploadedImage] = useState("");
  const [userName, setUserName] = useState("");

  const [searchedStudent, setSearchedStudent] = useState("");
  const [activeStatus, setActiveStatus] = useState(true);
  const [inactiveStatus, setInactiveStatus] = useState(true);
  const [maleGender, setMaleGender] = useState(false);
  const [femaleGender, setFemaleGender] = useState(false);

  const [sortDown, setSortDown] = useState(false);
  const [sortUp, setSortUp] = useState(false);

  const filteredDataByName = [...studentsData].filter((student) =>
    student.Name.toLocaleLowerCase().includes(searchedStudent)
  );

  const filterStudentByActive = [...filteredDataByName].filter(
    (student) => student.Status === "ACTIVE"
  );

  const filterStudentByInactive = [...filteredDataByName].filter(
    (student) => student.Status === "INACTIVE"
  );

  const filterStudentByMale = [...filteredDataByName].filter(
    (student) => student.Gender === "MALE"
  );

  const filterStudentByFemale = [...filteredDataByName].filter(
    (student) => student.Gender === "FEMALE"
  );

  const filterStudentByActiveMale = [...filterStudentByMale].filter(
    (student) => student.Status === "ACTIVE"
  );

  const filterStudentByActiveFemale = [...filterStudentByFemale].filter(
    (student) => student.Status === "ACTIVE"
  );

  const filterStudentByInactiveMale = [...filterStudentByMale].filter(
    (student) => student.Status === "INACTIVE"
  );

  const filterStudentByInactiveFemale = [...filterStudentByFemale].filter(
    (student) => student.Status === "INACTIVE"
  );

  const filteredByActiveStatus = [...studentsData].filter(
    (student) => student.Status === "ACTIVE"
  );

  const filteredByInactiveStatus = [...studentsData].filter(
    (student) => student.Status === "INACTIVE"
  );

  const filteredByMale = [...studentsData].filter(
    (student) => student.Gender === "MALE"
  );

  const filteredByFemale = [...studentsData].filter(
    (student) => student.Gender === "FEMALE"
  );

  const filterByActiveMale = [...filteredByActiveStatus].filter(
    (student) => student.Gender === "MALE"
  );

  const filterByActiveFemale = [...filteredByActiveStatus].filter(
    (student) => student.Gender === "FEMALE"
  );

  const filterByInactiveMale = [...filteredByInactiveStatus].filter(
    (student) => student.Gender === "MALE"
  );

  const filterByInactiveFemale = [...filteredByInactiveStatus].filter(
    (student) => student.Gender === "FEMALE"
  );

  const sortDownByActive = [...filteredByActiveStatus].sort(
    (a, b) => b.Grades - a.Grades
  );
  const sortDownByInactive = [...filteredByInactiveStatus].sort(
    (a, b) => b.Grades - a.Grades
  );
  const sortDownByMale = [...filteredByMale].sort(
    (a, b) => b.Grades - a.Grades
  );
  const sortDownByFemale = [...filteredByFemale].sort(
    (a, b) => b.Grades - a.Grades
  );

  const sortUpByActive = [...filteredByActiveStatus].sort(
    (a, b) => a.Grades - b.Grades
  );
  const sortUpByInactive = [...filteredByInactiveStatus].sort(
    (a, b) => a.Grades - b.Grades
  );
  const sortUpByMale = [...filteredByMale].sort((a, b) => a.Grades - b.Grades);
  const sortUpByFemale = [...filteredByFemale].sort(
    (a, b) => a.Grades - b.Grades
  );

  const sortDownByActiveMale = [...filterByActiveMale].sort(
    (a, b) => b.Grades - a.Grades
  );

  const sortDownByInactiveMale = [...filterByInactiveMale].sort(
    (a, b) => b.Grades - a.Grades
  );

  const sortDownByActiveFemale = [...filterByActiveFemale].sort(
    (a, b) => b.Grades - a.Grades
  );

  const sortDownByInactiveFemale = [...filterByInactiveFemale].sort(
    (a, b) => b.Grades - a.Grades
  );

  const sortUpByActiveMale = [...filterByActiveMale].sort(
    (a, b) => a.Grades - b.Grades
  );

  const sortUpByActiveFemale = [...filterByActiveFemale].sort(
    (a, b) => a.Grades - b.Grades
  );

  const sortUpByInactiveMale = [...filterByInactiveMale].sort(
    (a, b) => a.Grades - b.Grades
  );

  const sortUpByInactiveFemale = [...filterByInactiveFemale].sort(
    (a, b) => a.Grades - b.Grades
  );

  const sortUpByName = [...filteredDataByName].sort(
    (a, b) => a.Grades - b.Grades
  );

  const sortDownByName = [...filteredDataByName].sort(
    (a, b) => b.Grades - a.Grades
  );

  const sortUpStudentActive = [...filterStudentByActive].sort(
    (a, b) => a.Grades - b.Grades
  );

  const sortDownStudentActive = [...filterStudentByActive].sort(
    (a, b) => b.Grades - a.Grades
  );

  const sortUpStudentInactive = [...filterStudentByInactive].sort(
    (a, b) => a.Grades - b.Grades
  );

  const sortDownStudentInactive = [...filterStudentByInactive].sort(
    (a, b) => b.Grades - a.Grades
  );

  const sortUpStudentMale = [...filterStudentByMale].sort(
    (a, b) => a.Grades - b.Grades
  );

  const sortDownStudentMale = [...filterStudentByMale].sort(
    (a, b) => b.Grades - a.Grades
  );

  const sortUpStudentFemale = [...filterStudentByFemale].sort(
    (a, b) => a.Grades - b.Grades
  );

  const sortDownStudentFemale = [...filterStudentByFemale].sort(
    (a, b) => b.Grades - a.Grades
  );

  const sortUpActiveMaleStudent = [...filterStudentByActiveMale].sort(
    (a, b) => a.Grades - b.Grades
  );

  const sortUpActiveFemaleStudent = [...filterStudentByActiveFemale].sort(
    (a, b) => a.Grades - b.Grades
  );

  const sortUpInactiveMaleStudent = [...filterStudentByInactiveMale].sort(
    (a, b) => a.Grades - b.Grades
  );

  const sortUpInactiveFemaleStudent = [...filterStudentByInactiveFemale].sort(
    (a, b) => a.Grades - b.Grades
  );

  const sortDownActiveMaleStudent = [...filterStudentByActiveMale].sort(
    (a, b) => b.Grades - a.Grades
  );

  const sortDownActiveFemaleStudent = [...filterStudentByActiveFemale].sort(
    (a, b) => b.Grades - a.Grades
  );

  const sortDownInactiveMaleStudent = [...filterStudentByInactiveMale].sort(
    (a, b) => b.Grades - a.Grades
  );

  const sortDownInactiveFemaleStudent = [...filterStudentByInactiveFemale].sort(
    (a, b) => b.Grades - a.Grades
  );

  const filterConditions = [
    {
      check:
        !searchedStudent &&
        !sortUp &&
        !sortDown &&
        activeStatus &&
        inactiveStatus &&
        maleGender &&
        femaleGender,
      value: studentsData,
    },
    {
      check:
        !searchedStudent &&
        activeStatus &&
        inactiveStatus &&
        maleGender &&
        femaleGender &&
        sortUp,
      value: sortedAscendedData,
    },
    {
      check:
        !searchedStudent &&
        activeStatus &&
        inactiveStatus &&
        maleGender &&
        femaleGender &&
        sortDown,
      value: sortedDescendedData,
    },
    {
      check:
        !searchedStudent &&
        !sortUp &&
        !sortDown &&
        activeStatus &&
        inactiveStatus &&
        !maleGender &&
        !femaleGender,
      value: studentsData,
    },
    {
      check:
        !searchedStudent &&
        activeStatus &&
        inactiveStatus &&
        !maleGender &&
        !femaleGender &&
        sortUp,
      value: sortedAscendedData,
    },
    {
      check:
        !searchedStudent &&
        activeStatus &&
        inactiveStatus &&
        !maleGender &&
        !femaleGender &&
        sortDown,
      value: sortedDescendedData,
    },
    {
      check:
        !searchedStudent &&
        !sortUp &&
        !sortDown &&
        maleGender &&
        femaleGender &&
        !activeStatus &&
        !inactiveStatus,
      value: studentsData,
    },
    {
      check:
        !searchedStudent &&
        maleGender &&
        femaleGender &&
        !activeStatus &&
        !inactiveStatus &&
        sortUp,
      value: sortedAscendedData,
    },
    {
      check:
        !searchedStudent &&
        maleGender &&
        femaleGender &&
        !activeStatus &&
        !inactiveStatus &&
        sortDown,
      value: sortedDescendedData,
    },
    {
      check:
        !searchedStudent &&
        !sortDown &&
        !sortUp &&
        activeStatus &&
        !inactiveStatus &&
        maleGender &&
        femaleGender,
      value: filteredByActiveStatus,
    },
    {
      check:
        !searchedStudent &&
        activeStatus &&
        !inactiveStatus &&
        maleGender &&
        femaleGender &&
        sortUp,
      value: sortUpByActive,
    },
    {
      check:
        !searchedStudent &&
        activeStatus &&
        !inactiveStatus &&
        maleGender &&
        femaleGender &&
        sortDown,
      value: sortDownByActive,
    },
    {
      check:
        !searchedStudent &&
        !sortDown &&
        !sortUp &&
        activeStatus &&
        !inactiveStatus &&
        !maleGender &&
        !femaleGender,
      value: filteredByActiveStatus,
    },
    {
      check:
        !searchedStudent &&
        activeStatus &&
        !inactiveStatus &&
        !maleGender &&
        !femaleGender &&
        sortUp,
      value: sortUpByActive,
    },
    {
      check:
        !searchedStudent &&
        activeStatus &&
        !inactiveStatus &&
        !maleGender &&
        !femaleGender &&
        sortDown,
      value: sortDownByActive,
    },
    {
      check:
        !searchedStudent &&
        !sortDown &&
        !sortUp &&
        !activeStatus &&
        inactiveStatus &&
        maleGender &&
        femaleGender,
      value: filteredByInactiveStatus,
    },
    {
      check:
        !searchedStudent &&
        !activeStatus &&
        inactiveStatus &&
        maleGender &&
        femaleGender &&
        sortUp,
      value: sortUpByInactive,
    },
    {
      check:
        !searchedStudent &&
        !activeStatus &&
        inactiveStatus &&
        maleGender &&
        femaleGender &&
        sortDown,
      value: sortDownByInactive,
    },
    {
      check:
        !searchedStudent &&
        !sortDown &&
        !sortUp &&
        !activeStatus &&
        inactiveStatus &&
        !maleGender &&
        !femaleGender,
      value: filteredByInactiveStatus,
    },
    {
      check:
        !searchedStudent &&
        !activeStatus &&
        inactiveStatus &&
        !maleGender &&
        !femaleGender &&
        sortUp,
      value: sortUpByInactive,
    },
    {
      check:
        !searchedStudent &&
        !activeStatus &&
        inactiveStatus &&
        !maleGender &&
        !femaleGender &&
        sortDown,
      value: sortDownByInactive,
    },
    {
      check:
        !searchedStudent &&
        !sortUp &&
        !sortDown &&
        activeStatus &&
        inactiveStatus &&
        maleGender &&
        !femaleGender,
      value: filteredByMale,
    },
    {
      check:
        !searchedStudent &&
        activeStatus &&
        inactiveStatus &&
        maleGender &&
        !femaleGender &&
        sortUp,
      value: sortUpByMale,
    },
    {
      check:
        !searchedStudent &&
        activeStatus &&
        inactiveStatus &&
        maleGender &&
        !femaleGender &&
        sortDown,
      value: sortDownByMale,
    },
    {
      check:
        !searchedStudent &&
        !sortUp &&
        !sortDown &&
        !activeStatus &&
        !inactiveStatus &&
        maleGender &&
        !femaleGender,
      value: filteredByMale,
    },
    {
      check:
        !searchedStudent &&
        !activeStatus &&
        !inactiveStatus &&
        maleGender &&
        !femaleGender &&
        sortUp,
      value: sortUpByMale,
    },
    {
      check:
        !searchedStudent &&
        !activeStatus &&
        !inactiveStatus &&
        maleGender &&
        !femaleGender &&
        sortDown,
      value: sortDownByMale,
    },
    {
      check:
        !searchedStudent &&
        !sortUp &&
        !sortDown &&
        activeStatus &&
        inactiveStatus &&
        !maleGender &&
        femaleGender,
      value: filteredByFemale,
    },
    {
      check:
        !searchedStudent &&
        activeStatus &&
        inactiveStatus &&
        !maleGender &&
        femaleGender &&
        sortUp,
      value: sortUpByFemale,
    },
    {
      check:
        !searchedStudent &&
        activeStatus &&
        inactiveStatus &&
        !maleGender &&
        femaleGender &&
        sortDown,
      value: sortDownByFemale,
    },
    {
      check:
        !searchedStudent &&
        !sortDown &&
        !sortUp &&
        !activeStatus &&
        !inactiveStatus &&
        !maleGender &&
        femaleGender,
      value: filteredByFemale,
    },
    {
      check:
        !searchedStudent &&
        !activeStatus &&
        !inactiveStatus &&
        !maleGender &&
        femaleGender &&
        sortUp,
      value: sortUpByFemale,
    },
    {
      check:
        !searchedStudent &&
        !activeStatus &&
        !inactiveStatus &&
        !maleGender &&
        femaleGender &&
        sortDown,
      value: sortDownByFemale,
    },
    {
      check:
        !searchedStudent &&
        !sortUp &&
        !sortDown &&
        activeStatus &&
        !inactiveStatus &&
        maleGender &&
        !femaleGender,
      value: filterByActiveMale,
    },
    {
      check:
        !searchedStudent &&
        activeStatus &&
        !inactiveStatus &&
        maleGender &&
        !femaleGender &&
        sortUp,
      value: sortUpByActiveMale,
    },
    {
      check:
        !searchedStudent &&
        activeStatus &&
        !inactiveStatus &&
        maleGender &&
        !femaleGender &&
        sortDown,
      value: sortDownByActiveMale,
    },
    {
      check:
        !searchedStudent &&
        !sortUp &&
        !sortDown &&
        activeStatus &&
        !inactiveStatus &&
        !maleGender &&
        femaleGender,
      value: filterByActiveFemale,
    },
    {
      check:
        !searchedStudent &&
        activeStatus &&
        !inactiveStatus &&
        !maleGender &&
        femaleGender &&
        sortUp,
      value: sortUpByActiveFemale,
    },
    {
      check:
        !searchedStudent &&
        activeStatus &&
        !inactiveStatus &&
        !maleGender &&
        femaleGender,
      sortDown,
      value: sortDownByActiveFemale,
    },
    {
      check:
        !searchedStudent &&
        !sortUp &&
        !sortDown &&
        !activeStatus &&
        inactiveStatus &&
        maleGender &&
        !femaleGender,
      value: filterByInactiveMale,
    },
    {
      check:
        !searchedStudent &&
        !activeStatus &&
        inactiveStatus &&
        maleGender &&
        !femaleGender &&
        sortUp,
      value: sortUpByInactiveMale,
    },
    {
      check:
        !searchedStudent &&
        !activeStatus &&
        inactiveStatus &&
        maleGender &&
        !femaleGender &&
        sortDown,
      value: sortDownByInactiveMale,
    },
    {
      check:
        !searchedStudent &&
        !sortUp &&
        !sortDown &&
        !activeStatus &&
        inactiveStatus &&
        !maleGender &&
        femaleGender,
      value: filterByInactiveFemale,
    },
    {
      check:
        !searchedStudent &&
        !activeStatus &&
        inactiveStatus &&
        !maleGender &&
        femaleGender &&
        sortUp,
      value: sortUpByInactiveFemale,
    },
    {
      check:
        !searchedStudent &&
        !activeStatus &&
        inactiveStatus &&
        !maleGender &&
        femaleGender &&
        sortDown,
      value: sortDownByInactiveFemale,
    },
    {
      check:
        !sortUp &&
        !sortDown &&
        searchedStudent &&
        activeStatus &&
        inactiveStatus &&
        maleGender &&
        femaleGender &&
        filteredDataByName.length !== 0,
      value: filteredDataByName,
    },
    {
      check:
        sortUp &&
        searchedStudent &&
        activeStatus &&
        inactiveStatus &&
        maleGender &&
        femaleGender &&
        filteredDataByName.length !== 0,
      value: sortUpByName,
    },
    {
      check:
        sortDown &&
        searchedStudent &&
        activeStatus &&
        inactiveStatus &&
        maleGender &&
        femaleGender &&
        filteredDataByName.length !== 0,
      value: sortDownByName,
    },
    {
      check:
        !sortUp &&
        !sortDown &&
        searchedStudent &&
        activeStatus &&
        inactiveStatus &&
        !maleGender &&
        !femaleGender &&
        filteredDataByName.length !== 0,
      value: filteredDataByName,
    },
    {
      check:
        sortUp &&
        searchedStudent &&
        activeStatus &&
        inactiveStatus &&
        !maleGender &&
        !femaleGender &&
        filteredDataByName.length !== 0,
      value: sortUpByName,
    },
    {
      check:
        sortDown &&
        searchedStudent &&
        activeStatus &&
        inactiveStatus &&
        !maleGender &&
        !femaleGender &&
        filteredDataByName.length !== 0,
      value: sortDownByName,
    },
    {
      check:
        !sortDown &&
        !sortUp &&
        searchedStudent &&
        !activeStatus &&
        !inactiveStatus &&
        maleGender &&
        femaleGender &&
        filteredDataByName.length !== 0,
      value: filteredDataByName,
    },
    {
      check:
        sortUp &&
        searchedStudent &&
        !activeStatus &&
        !inactiveStatus &&
        maleGender &&
        femaleGender &&
        filteredDataByName.length !== 0,
      value: sortUpByName,
    },
    {
      check:
        sortDown &&
        searchedStudent &&
        !activeStatus &&
        !inactiveStatus &&
        maleGender &&
        femaleGender &&
        filteredDataByName.length !== 0,
      value: sortDownByName,
    },
    {
      check:
        !sortUp &&
        !sortDown &&
        searchedStudent &&
        activeStatus &&
        !inactiveStatus &&
        !maleGender &&
        !femaleGender,
      value: filterStudentByActive,
    },
    {
      check:
        sortUp &&
        searchedStudent &&
        activeStatus &&
        !inactiveStatus &&
        !maleGender &&
        !femaleGender,
      value: sortUpStudentActive,
    },
    {
      check:
        sortDown &&
        searchedStudent &&
        activeStatus &&
        !inactiveStatus &&
        !maleGender &&
        !femaleGender,
      value: sortDownStudentActive,
    },

    {
      check:
        !sortUp &&
        !sortDown &&
        searchedStudent &&
        activeStatus &&
        !inactiveStatus &&
        maleGender &&
        femaleGender,
      value: filterStudentByActive,
    },
    {
      check:
        sortUp &&
        searchedStudent &&
        activeStatus &&
        !inactiveStatus &&
        maleGender &&
        femaleGender,
      value: sortUpStudentActive,
    },
    {
      check:
        sortDown &&
        searchedStudent &&
        activeStatus &&
        !inactiveStatus &&
        maleGender &&
        femaleGender,
      value: sortDownStudentActive,
    },

    {
      check:
        !sortUp &&
        !sortDown &&
        searchedStudent &&
        !activeStatus &&
        inactiveStatus &&
        !maleGender &&
        !femaleGender,
      value: filterStudentByInactive,
    },
    {
      check:
        sortUp &&
        searchedStudent &&
        !activeStatus &&
        inactiveStatus &&
        !maleGender &&
        !femaleGender,
      value: sortUpStudentInactive,
    },
    {
      check:
        sortDown &&
        searchedStudent &&
        !activeStatus &&
        inactiveStatus &&
        !maleGender &&
        !femaleGender,
      value: sortDownStudentInactive,
    },

    {
      check:
        !sortUp &&
        !sortDown &&
        searchedStudent &&
        !activeStatus &&
        inactiveStatus &&
        maleGender &&
        femaleGender,
      value: filterStudentByInactive,
    },
    {
      check:
        sortUp &&
        searchedStudent &&
        !activeStatus &&
        inactiveStatus &&
        maleGender &&
        femaleGender,
      value: sortUpStudentInactive,
    },
    {
      check:
        sortDown &&
        searchedStudent &&
        !activeStatus &&
        inactiveStatus &&
        maleGender &&
        femaleGender,
      value: sortDownStudentInactive,
    },

    {
      check:
        !sortUp &&
        !sortDown &&
        searchedStudent &&
        maleGender &&
        !activeStatus &&
        !inactiveStatus,
      value: filterStudentByMale,
    },
    {
      check:
        sortUp &&
        searchedStudent &&
        maleGender &&
        !activeStatus &&
        !inactiveStatus,
      value: sortUpStudentMale,
    },
    {
      check:
        sortDown &&
        searchedStudent &&
        maleGender &&
        !activeStatus &&
        !inactiveStatus,
      value: sortDownStudentMale,
    },
    {
      check:
        !sortUp &&
        !sortDown &&
        searchedStudent &&
        maleGender &&
        activeStatus &&
        inactiveStatus,
      value: filterStudentByMale,
    },
    {
      check:
        sortUp &&
        searchedStudent &&
        maleGender &&
        activeStatus &&
        inactiveStatus,
      value: sortUpStudentMale,
    },
    {
      check:
        sortDown &&
        searchedStudent &&
        maleGender &&
        activeStatus &&
        inactiveStatus,
      value: sortDownStudentMale,
    },
    {
      check:
        !sortUp &&
        !sortDown &&
        searchedStudent &&
        femaleGender &&
        !activeStatus &&
        !inactiveStatus,
      value: filterStudentByFemale,
    },
    {
      check:
        sortUp &&
        searchedStudent &&
        femaleGender &&
        !activeStatus &&
        !inactiveStatus,
      value: sortUpStudentFemale,
    },
    {
      check:
        sortDown &&
        searchedStudent &&
        femaleGender &&
        !activeStatus &&
        !inactiveStatus,
      value: sortDownStudentFemale,
    },
    {
      check:
        !sortUp &&
        !sortDown &&
        searchedStudent &&
        femaleGender &&
        activeStatus &&
        inactiveStatus,
      value: filterStudentByFemale,
    },
    {
      check:
        sortUp &&
        searchedStudent &&
        femaleGender &&
        activeStatus &&
        inactiveStatus,
      value: sortUpStudentFemale,
    },
    {
      check:
        sortDown &&
        searchedStudent &&
        femaleGender &&
        activeStatus &&
        inactiveStatus,
      value: sortDownStudentFemale,
    },
    {
      check:
        !sortUp &&
        !sortDown &&
        searchedStudent &&
        activeStatus &&
        !inactiveStatus &&
        maleGender &&
        !femaleGender,
      value: filterStudentByActiveMale,
    },
    {
      check:
        sortUp &&
        searchedStudent &&
        activeStatus &&
        !inactiveStatus &&
        maleGender &&
        !femaleGender,
      value: sortUpActiveMaleStudent,
    },
    {
      check:
        sortDown &&
        searchedStudent &&
        activeStatus &&
        !inactiveStatus &&
        maleGender &&
        !femaleGender,
      value: sortDownActiveMaleStudent,
    },
    {
      check:
        !sortUp &&
        !sortDown &&
        searchedStudent &&
        activeStatus &&
        !inactiveStatus &&
        !maleGender &&
        femaleGender,
      value: filterStudentByActiveFemale,
    },
    {
      check:
        sortUp &&
        searchedStudent &&
        activeStatus &&
        !inactiveStatus &&
        !maleGender &&
        femaleGender,
      value: sortUpActiveFemaleStudent,
    },
    {
      check:
        sortDown &&
        searchedStudent &&
        activeStatus &&
        !inactiveStatus &&
        !maleGender &&
        femaleGender,
      value: sortDownActiveFemaleStudent,
    },
    {
      check:
        !sortUp &&
        !sortDown &&
        searchedStudent &&
        !activeStatus &&
        inactiveStatus &&
        maleGender &&
        !femaleGender,
      value: filterStudentByInactiveMale,
    },
    {
      check:
        sortUp &&
        searchedStudent &&
        !activeStatus &&
        inactiveStatus &&
        maleGender &&
        !femaleGender,
      value: sortUpInactiveMaleStudent,
    },
    {
      check:
        sortDown &&
        searchedStudent &&
        !activeStatus &&
        inactiveStatus &&
        maleGender &&
        !femaleGender,
      value: sortDownInactiveMaleStudent,
    },
    {
      check:
        !sortUp &&
        !sortDown &&
        searchedStudent &&
        !activeStatus &&
        inactiveStatus &&
        !maleGender &&
        femaleGender,
      value: filterStudentByInactiveFemale,
    },
    {
      check:
        sortUp &&
        searchedStudent &&
        !activeStatus &&
        inactiveStatus &&
        !maleGender &&
        femaleGender,
      value: sortUpInactiveFemaleStudent,
    },
    {
      check:
        sortDown &&
        searchedStudent &&
        !activeStatus &&
        inactiveStatus &&
        !maleGender &&
        femaleGender,
      value: sortDownInactiveFemaleStudent,
    },
  ];

  const matchedCondition = filterConditions.find(
    (condition) => condition.check
  );

  const data = matchedCondition ? matchedCondition.value : [];

  const pageNum = Math.ceil(data.length / resultsPerPage || 1);

  function handleSearchStudent(e) {
    setSearchedStudent(e.target.value);
    setCurrPage(1);
  }

  function handlePopUp() {
    document.querySelector(".modal").classList.remove("hidden");

    document.querySelector(".overlay").classList.remove("hidden");
  }

  useEffect(() => {
    const storedImage = localStorage.getItem("uploadedImage");
    const storedName = localStorage.getItem("userName");

    if (storedImage) {
      setUploadedImage(storedImage);
    }
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  useEffect(function () {
    document.body.style.display = "block";
  }, []);

  const start = (curPage - 1) * resultsPerPage;
  const end = curPage * resultsPerPage;

  return (
    <div className="form">
      <Navbar
        name={userName}
        setUploadedImage={setUploadedImage}
        setUserName={setUserName}
        setFormPage={setFormPage}
      >
        <Image onPopUp={handlePopUp} img={uploadedImage} />
      </Navbar>

      <div className="form-data">
        <Filter
          setCurrPage={setCurrPage}
          setActiveStatus={setActiveStatus}
          setInactiveStatus={setInactiveStatus}
          setMaleGender={setMaleGender}
          setFemaleGender={setFemaleGender}
          setSortDown={setSortDown}
          setSortUp={setSortUp}
        />
        <header className="form-header">
          <div
            onClick={() => {
              document
                .querySelector(".filter-container")
                .classList.toggle("display-class");
            }}
            className="filter-btn"
          >
            <img
              className="filter-btn-icon"
              src="images\filter-bar.png"
              alt="filter"
            />
            <div className="line"></div>
            <p>filter</p>
          </div>
          <div className="form-input-container">
            <img
              className="form-search-loupe"
              src="images\icons8-loupe-30.png"
              alt="loupe"
            />
            <input
              value={searchedStudent}
              onChange={handleSearchStudent}
              type="text"
            />
          </div>
        </header>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>
                  სტუდენტის სახელი
                  <br /> და გვარი
                </th>
                <th>სტატუსი</th>
                <th>სქესი</th>

                <th>
                  <div className="grades">
                    ქულები
                    <div className="grades-filter">
                      <img
                        onClick={() => {
                          setSortUp(true);
                          setSortDown(false);
                        }}
                        className="filter-grades-up"
                        src="images/Vector-up.png"
                        alt="up filter"
                      />
                      <img
                        onClick={() => {
                          setSortDown(true);
                          setSortUp(false);
                        }}
                        className="filter-grades-down"
                        src="images/Vector-down.png"
                        alt="down filter"
                      />
                    </div>
                  </div>
                </th>
                <th>პირადი ნომერი</th>
                <th>Email</th>
                <th>მობილურის ნომერი</th>
                <th>მისამართი</th>
                <th>დაბადების თარიღი</th>
              </tr>
            </thead>
            <tbody>
              {data
                .map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item.Name}</td>
                      <td>{item.Status}</td>
                      <td>{item.Gender}</td>
                      <td>{item.Grades}</td>
                      <td>{item.ID_Number}</td>
                      <td>{item.Email_Address}</td>
                      <td>{item.Mobile_Number}</td>
                      <td>{item.Address}</td>
                      <td>{item.Date_of_Birth}</td>
                    </tr>
                  );
                })
                .slice(start, end)}
            </tbody>
          </table>
        </div>

        <Pagination
          formPage={formPage}
          pageNum={pageNum}
          setCurrPage={setCurrPage}
          curPage={curPage}
        />
      </div>
    </div>
  );
}
