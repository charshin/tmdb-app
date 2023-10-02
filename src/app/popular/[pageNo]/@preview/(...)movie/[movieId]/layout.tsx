import Modal from '@/core/components/Modal';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Modal>{children}</Modal>;
}
