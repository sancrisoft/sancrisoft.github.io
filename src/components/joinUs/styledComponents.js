import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

export const Container = styled.div`
  padding: 2em 2em;
  border-radius: 10px;
  background-color: rgba(197,197,197,0.15);
  margin: 1em;
  position: sticky;
  top: 80px;
  ${breakpoint('tablet')`
    margin: 2em;
  `}
  h3 {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 2em;
    label.error {
      margin-top: 5px;
      font-weight: normal;
      color: #d61400;
      font-size: 14px;
      font-style: italic;
      position: relative;
      top: -4px;
    }
    div.submit {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    div.reminder > label {
      font-style: italic;
      font-size: 14px;
      margin-top: 10px;
    }
    div.form-control {
      display: flex;
      flex-direction: column;
      input[aria-invalid="true"], textarea[aria-invalid="true"] {
        margin-bottom: 0;
      }
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
      border-radius: 4px;
      color: white;
      padding: 6px 20px;
      font-size: 0.9rem;
      margin-top: 2em;
      cursor: pointer;
      &:hover {
        background-color: #ffa44f;
      }
      &:focus {
        outline: 0;
      }
    }
  }
`;