// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let storedValue = "harish";

export default function handler(req, res) {
  if (req.method === 'GET') {

    res.status(200).json({ value: storedValue });
      
  } else if (req.method === 'POST') {

    const { name } = req.body;
    storedValue = name;
    
    res.status(200).json({ message: "Value saved successfully" });

  } else {

    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);

  }
}