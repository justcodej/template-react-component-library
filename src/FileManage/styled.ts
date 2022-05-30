import styled from 'styled-components'

export const StyledFileManage = styled.div`
  border: 1px solid #eee;
  padding: 20px;
  .file-list{
    .file-list-item{
      width: 50px;
      height: 50px;
      border: 1px solid #eee;
      border-radius: 5px;
      padding: 10px;
      font-size: 14px;
      cursor: pointer;
      text-align: center;
      line-height: 50px;
      transition: all .2s ease;
    }
    .file-list-item:hover{
      border-color: #ddd;
    }
  }
`