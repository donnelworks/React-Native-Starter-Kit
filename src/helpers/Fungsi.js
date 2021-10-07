const Fungsi = {
  tglWithZero: function (str) {
    const zero = i => {
      return (i < 10 ? '0' : '') + i;
    };
    const tanggal = zero(str.getDate());
    const bulan = zero(str.getMonth() + 1);
    const tahun = str.getFullYear();
    return tanggal + '-' + bulan + '-' + tahun;
  },

  tglNormal: function (str) {
    var tgl = str.split(/\D/g);
    return [tgl[2], tgl[1], tgl[0]].join('-');
  },

  tglBulanIndo: function (str) {
    const bulanIndo = [
      '',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Mei',
      'Jun',
      'Jul',
      'Agt',
      'Sep',
      'Okt',
      'Nov',
      'Des',
    ];
    const tanggal = str.split('-')[2];
    const bulan = str.split('-')[1];
    const tahun = str.split('-')[0];
    return tanggal + ' ' + bulanIndo[Math.abs(bulan)] + ' ' + tahun;
  },

  initial: function (str) {
    const first = str.charAt(0).toUpperCase();
    const second = str.charAt(1).toUpperCase();
    return first + second;
  },
};

export default Fungsi;
