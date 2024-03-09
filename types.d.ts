type User = {
  id: number;
  name: string;
};

interface Essentials {
  id: string;
  img?: string;
  title: string;
  desc: string;
  goal: string;
  button?: string;
  tags?: string[];
}
