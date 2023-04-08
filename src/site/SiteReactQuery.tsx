/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import CreateEdit from '@/components/Dialog/CreateEdit'
import { Students as StudentsType } from '@/interfaces/students.type'
import { fetchStudents } from '@/pages/api/students.api'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

import { Button, Image, Modal, Space, Spin, Table, message } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useSearchParams } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
// import { useQueryString } from '@/utils/hooks'

function SiteReactQuery() {
  // const [students, setStudents] = useState<StudentsType[] | undefined>()
  // const [isLoading, setIsLoading] = useState<boolean>(false)
  const [open, setOpen] = useState(false)

  const [messageApi, contextHolder] = message.useMessage()

  const columns: ColumnsType<StudentsType> = [
    {
      title: 'First name',
      dataIndex: 'first_name',
      key: 'first_name',
      render: (text: string) => <a>{text}</a>
    },
    {
      title: 'Last name',
      dataIndex: 'last_name',
      key: 'last_name',
      render: (text: string) => <a>{text}</a>
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Avatar',
      key: 'avatar',
      align: 'center',
      render: (record: any) => <Image width={20} alt='cc' src={record.avatar} />
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      render: (record: any) => (
        <Space size='large'>
          <Button type='primary'>
            <EditOutlined onClick={handleModalEdit} />
          </Button>

          <Button type='dashed' danger>
            <DeleteOutlined />
          </Button>
        </Space>
      )
    }
  ]

  const handleModalEdit = () => {
    setOpen(true)
  }

  // const handleOk = () => {
  //   setIsLoading(true)
  //   setTimeout(() => {
  //     setOpen(false)
  //     setIsLoading(false)
  //   }, 2000)
  // }

  // const handleCancel = () => {
  //   console.log('Clicked cancel button')
  //   setOpen(false)
  // }

  // function getStudents() {
  //   fetchStudents(1, 20)
  //     .then((res) => {
  //       setIsLoading(false)
  //       setStudents(res.data)
  //     })
  //     .catch((res) => {
  //       setIsLoading(false)
  //       messageApi.open({
  //         type: 'error',
  //         content: 'This is an error message'
  //       })
  //     })
  // }

  // useEffect(() => {
  //   setIsLoading(true)
  //   getStudents()
  // }, [])

  // const { data, isLoading } = useQuery({
  //   queryKey: ['students', 1],
  //   queryFn: () => getStudents()
  // })
  // console.log('🚀🎉🔥🍺 >>>> data:', data)

  // const queryString: { page?: string } = useQueryString()
  // const page = Number(queryString.page) || 1
  const page = 1

  const { data, isLoading } = useQuery({
    queryKey: ['students', page],
    queryFn: () => fetchStudents(page, 50)
    // enabled: id !== undefined,
    // staleTime: 1000 * 10
  })

  const students = data?.data

  return (
    <>
      {contextHolder}
      tttt
      <Spin spinning={isLoading}>
        <Table columns={columns} dataSource={students} rowKey={(record) => record.id} bordered />
      </Spin>
      {/* <Modal title='Title' open={open} onOk={handleOk} confirmLoading={isLoading} onCancel={handleCancel}>
        <CreateEdit  />
      </Modal> */}
    </>
  )
}

export default SiteReactQuery
