
function sortString(array) {
    const sortedChars = [];
    for (let char of array) {
      let inserted = false;
      for (let i = 0; i < sortedChars.length; i++) {
        if (char < sortedChars[i]) {
          for (let j = sortedChars.length - 1; j >= i; j--) {
            sortedChars[j + 1] = sortedChars[j];
          }
          sortedChars[i] = char;
          inserted = true;
          break;
        }
      }
      if (!inserted) {
        sortedChars.push(char);
      }
    }
    let result = '';
    for (let char of sortedChars) {
      result += char;
    }
    return result;
  }
  
  function anagram(strings) {
    const groupedAnagrams = {};
  
    // Memproses setiap string dalam array
    for (let i = 0; i < strings.length; i++) {
      const str = strings[i];
      // Mengurutkan karakter dalam string untuk mendapatkan kunci anagram
      const sortedStr = sortString(str);
  
      // Mengecek apakah kunci anagram sudah ada dalam objek groupedAnagrams
      let found = false;
      for (const key in groupedAnagrams) {
        if (key === sortedStr) {
          // Jika sudah ada, tambahkan string ke dalam array yang sudah ada
          groupedAnagrams[key].push(str);
          found = true;
          break;
        }
      }
  
      if (!found) {
        // Jika belum ada, buat array baru dengan string tersebut sebagai elemen pertama
        groupedAnagrams[sortedStr] = [str];
      }
    }
  
  
    const result = [];
    for (const key in groupedAnagrams) {
      result.push(groupedAnagrams[key]);
    }
  
    return result;
  }
  
  // Contoh penggunaan fungsi groupAnagrams
  const strings = [
    [ 'cook' ],
    [ 'save', 'aves', 'vase' ],
    [ 'taste', 'state' ],
    [ 'map' ]
  ];
  console.log(anagram(strings));