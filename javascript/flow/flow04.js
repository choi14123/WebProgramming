let odd = 0;
let even = 0;
for(let i = 1; i<21; i++){
	if (i % 2 == 0)
        {
            even += i; 
        }
        else {
            odd  += i;
        }
}
console.log(even);
console.log(odd);