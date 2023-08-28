"use client";

import styled from "styled-components";

const Button = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: gray;
  background: white;
`;

type Props = {
  children: React.ReactNode;
};

export default function StyledButton({ children }: Props) {
  return <Button className="font-batang">{children}</Button>;
}
