import { FcCheckmark, FcEmptyTrash } from 'react-icons/fc';
import styled from 'styled-components';

export const Container = styled.div`
  /* background: linear-gradient(90deg, #383838 0%, #000000 81.25%); */
  /* background-image: url("/public/neon.jpg"); */
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

export const TodoList = styled.div`
  /* background: rgba(0, 0, 0, 0.8); */
  background: #000;
  padding: 1.875rem 1.25rem;  // 30px 20px
  border-radius: 0.625rem;  // 10px

  ul {
    padding: 0;
    margin-top: 3.75rem;  // 60px
  }

  h3 {
    color: #fff;
  }
`;

export const Input = styled.input`
  border-radius: 0.3125rem;  // 5px
  border: 1px solid rgba(209, 211, 212, 0.4);
  height: 2.5rem;
  margin-right: 1.875rem;  // 30px
  width: 21.375rem;  // 343px
  padding: 0.625rem;  // 10px
  font-size: 1rem;  // 16px
`;

export const Button = styled.button`
  background: #007bff;
  color: #fff;
  border-radius: 0.3125rem;  // 5px
  border: none;
  height: 2.5rem;  // 40px
  cursor: pointer;
  font-size: 1.0625rem;  // 17px
  line-height: 0.125rem;
  width: 8.125rem;  // 130px

  &:hover {
    background:rgb(76, 157, 243);
  }

  &:active {
    background: #0056b3;
  }
`;

export const ListItem = styled.div`
  background: ${(props) => (props.$isChecked ? '#E8FF8B' : '#E4E4E4')};
  border-radius: 0.3125rem;  // 5px
  box-shadow: 0.063rem 0.25rem 0.625rem rgba(0, 0, 0, 0.2);  // 1px 4px 10px
  height: 3.75rem;  // 60px
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;  // 20px
  padding: 0.625rem;  // 10px
  width: 31.25rem;  // 500px

  li {
    list-style: none;
  }
`;

export const Trash = styled(FcEmptyTrash)`
  cursor: pointer;
  font-size: 1.25rem;  //20px
`;

export const Check = styled(FcCheckmark)`
  cursor: pointer;
  font-size: 1.25rem;  //20px
`;
