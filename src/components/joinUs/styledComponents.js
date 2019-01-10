import styled from 'styled-components'

export const Container = styled.div`
  padding: 3em;
  border-radius: 10px;
  background-color: rgba(0,0,0,0.15);
  h3 {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 2em;
    label.error {
      color: #e53935;
    }
    div.submit {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    div.form-control {
      display: flex;
      flex-direction: column;
      input, textarea {
        border: none;
        margin: 10px 0 15px 0;
        padding: 5px;
        &:focus {
          outline: 0;
        }
      }
      textarea {
        resize: vertical;
      }
    }
    input[type="submit"] {
      background-color: #F28724;
      border: none;
      border-radius: 15px;
      color: white;
      padding: 10px 40px;
      font-size: 24px;
      margin-top: 2em;
      &:focus {
        outline: 0;
      }
    }
  }
`;