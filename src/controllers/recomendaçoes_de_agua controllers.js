export const getRecommendations = (req, res) => {
  const recommendations = [
    'Feche a torneira enquanto escova os dentes.',
    'Desligue o chuveiro enquanto estiver se ensaboando.',
    'Repare vazamentos imediatamente.',
    'Utilize técnicas de jardinagem que economizam água.'
  ];
  res.json(recommendations);
};


