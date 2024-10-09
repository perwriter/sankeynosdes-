import { Node, Edge } from 'react-flow-renderer'

interface SankeyNodeData {
  label: string
  value: number
  color: string
}

const nodes: Node<SankeyNodeData>[] = [
  {
    id: '1',
    type: 'custom',
    data: { label: 'Jobs applied to', value: 32, color: '#34D399' },
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    type: 'custom',
    data: { label: 'Replies', value: 15, color: '#34D399' },
    position: { x: 250, y: -100 },
  },
  {
    id: '3',
    type: 'custom',
    data: { label: 'No replies', value: 12, color: '#F87171' },
    position: { x: 250, y: 100 },
  },
  {
    id: '4',
    type: 'custom',
    data: { label: 'Rejections', value: 5, color: '#F87171' },
    position: { x: 250, y: 200 },
  },
  {
    id: '5',
    type: 'custom',
    data: { label: 'Initial interviews', value: 9, color: '#34D399' },
    position: { x: 500, y: -150 },
  },
  {
    id: '6',
    type: 'custom',
    data: { label: 'Replied too late', value: 6, color: '#F87171' },
    position: { x: 500, y: 50 },
  },
  {
    id: '7',
    type: 'custom',
    data: { label: 'Task requested', value: 4, color: '#34D399' },
    position: { x: 750, y: -200 },
  },
  {
    id: '8',
    type: 'custom',
    data: { label: 'No task required', value: 4, color: '#34D399' },
    position: { x: 750, y: -100 },
  },
  {
    id: '9',
    type: 'custom',
    data: { label: 'Rejected by me', value: 2, color: '#F87171' },
    position: { x: 750, y: 0 },
  },
  {
    id: '10',
    type: 'custom',
    data: { label: 'Rejected by company', value: 1, color: '#F87171' },
    position: { x: 750, y: 100 },
  },
  {
    id: '11',
    type: 'custom',
    data: { label: 'Final interview', value: 3, color: '#34D399' },
    position: { x: 1000, y: -150 },
  },
  {
    id: '12',
    type: 'custom',
    data: { label: 'Rejected before offer', value: 3, color: '#F87171' },
    position: { x: 1000, y: -50 },
  },
  {
    id: '13',
    type: 'custom',
    data: { label: 'Offer received', value: 2, color: '#34D399' },
    position: { x: 1250, y: -150 },
  },
  {
    id: '14',
    type: 'custom',
    data: { label: 'Accepted', value: 1, color: '#34D399' },
    position: { x: 1500, y: -200 },
  },
  {
    id: '15',
    type: 'custom',
    data: { label: 'Rejected', value: 1, color: '#F87171' },
    position: { x: 1500, y: -100 },
  },
]

const edges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e1-4', source: '1', target: '4' },
  { id: 'e2-5', source: '2', target: '5' },
  { id: 'e2-6', source: '2', target: '6' },
  { id: 'e5-7', source: '5', target: '7' },
  { id: 'e5-8', source: '5', target: '8' },
  { id: 'e5-9', source: '5', target: '9' },
  { id: 'e5-10', source: '5', target: '10' },
  { id: 'e7-11', source: '7', target: '11' },
  { id: 'e8-11', source: '8', target: '11' },
  { id: 'e11-12', source: '11', target: '12' },
  { id: 'e11-13', source: '11', target: '13' },
  { id: 'e13-14', source: '13', target: '14' },
  { id: 'e13-15', source: '13', target: '15' },
]

export const sankeyData = { nodes, edges }