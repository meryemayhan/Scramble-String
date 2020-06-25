function minimumConcat(initial, goal) {
      let count = 0;
      let sequence = '';
      initial.split('').map(letter => {
        sequence = sequence + letter
      });
      let iterator = Array.apply(null, Array(26)).map(Number.prototype.valueOf, 0), secondIter = Array.apply(null, Array(26)).map(Number.prototype.valueOf, 0);
            sequence = "^[" + sequence + "]*$";
      if (!RegExp(sequence).test(goal)) return -1;

      for (let i = 0; i < initial.length; i++) {
      iterator[initial.charCodeAt(i) - 97]++;
      }

      for (let i = 0; i < goal.length; i++) {
      secondIter[goal.charCodeAt(i) - 97]++;
      }
      for (let i = 0; i < 26; i++) {
      count += Math.abs(iterator[i] - secondIter[i]);
      }
            return count;
}


console.log(minimumConcat("abc", "abcbc"));
