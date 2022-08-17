import {
  Flex,
  Box,
  Heading,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  Avatar,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface IProps {
  c4pId: string;
}

interface IComments {
  fullName?: string;
  content: string;
  userName: string;
  numLikes: Number;
  userid?: string;
}

import { useCookies } from 'react-cookie';
import { FiSend } from 'react-icons/fi';
import { useParams } from 'react-router-dom';

const Comments = (props: IProps) => {
  const [cookies, setCookies, removeCookies] = useCookies();
  const [commentValue, setCommentValue] = useState<string>('');
  const [userVal, setUserVal] = useState<string>('');
  let [comments, setComments] = useState<Array<IComments>>([]);
  const params = useParams();

  const handleCommentChange = (e: any) => {
    setCommentValue(e.target.value);
  };

  const handleSubmitComment = () => {
    const sendComment = async () => {
      let content = {
        content: commentValue,
        numLikes: 0,
      };

      let headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cookies.Token}`,
      };

      let response = await axios.post(
        `${import.meta.env.VITE_API_URL}/comment/${props.c4pId}`,
        content,
        {
          headers: headers,
        }
      );
      let comment = { ...response.data.comment };
      comment.userName = userVal;
      comment.fullName = cookies.User;

      setComments((oldArray) => [...oldArray, comment]);
    };

    commentValue && sendComment();
  };

  useEffect(() => {
    /* const fetchComments = async () => {
      let response = await axios.get(
        `${import.meta.env.VITE_API_URL}/comment/${params.id}`
      );

      let data = await Promise.all(
        response.data.comments.map(async (comment: any) => {
          let userData = await axios.get(
            `${import.meta.env.VITE_API_URL}/users/${comment.userid}`
          );
          comment.userName = userData.data.username;
          console.log(comment);
        })
      );
    };
    fetchComments(); */

    const fetchComments = () => {
      axios
        .get(`${import.meta.env.VITE_API_URL}/comment/${params.id}`)
        .then((response) => {
          let data: Array<IComments> = [];
          response.data.comments.map((comment: any) => {
            axios
              .get(`${import.meta.env.VITE_API_URL}/users/${comment.userid}`)
              .then((userResponse) => {
                comment.fullName =
                  userResponse.data.name + ' ' + userResponse.data.lastName;
                comment.userName = userResponse.data.username;
                setUserVal(comment.userName);
                setComments((oldArray) => [...oldArray, comment]);
              });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchComments();
  }, []);

  return (
    <Box w="full" mt={2} boxShadow="xl" rounded="lg" p={5}>
      <Heading>Comentarios</Heading>

      <Flex w="full" align="center" py={5}>
        <Avatar name={cookies.User} />
        <InputGroup ml={2}>
          <Input
            rounded="full"
            placeholder="Escribe un comentario..."
            onChange={handleCommentChange}
          />
          <InputRightElement>
            <IconButton
              aria-label="send comment"
              icon={<FiSend />}
              rounded="full"
              mr={1}
              size="sm"
              onClick={handleSubmitComment}
            />
          </InputRightElement>
        </InputGroup>
      </Flex>

      <Box>
        {comments.map((comment, index) => (
          <Flex my={2} key={index}>
            <Avatar name={comment.fullName} />
            <Box
              ml={2}
              border={'1px solid rgba(234, 234, 234, 0.78)'}
              rounded="25px"
              p={3}
            >
              <Text color="rgba(153, 153, 153, 0.78)">{comment.userName}</Text>
              <Text color="rgba(55, 55, 55, 0.78)">{comment.content}</Text>
            </Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default Comments;
