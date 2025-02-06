import {
  Generator,
} from '@/components';

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold my-4">Flow</h2>
      <p>随机追加内容，连续分段输出</p>
      <Generator />
    </div>
  );
}
