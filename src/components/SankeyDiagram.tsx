import React, { useCallback } from 'react'
import ReactFlow, {
  Node,
  Edge,
  NodeTypes,
  Handle,
  Position,
  useNodesState,
  useEdgesState,
} from 'react-flow-renderer'

interface SankeyNodeData {
  label: string
  value: number
  color: string
}

interface SankeyNode extends Node<SankeyNodeData> {}

const CustomNode: React.FC<{ data: SankeyNodeData }> = ({ data }) => (
  <div
    className="px-4 py-2 shadow-md rounded-md text-sm"
    style={{ backgroundColor: data.color }}
  >
    <div className="font-bold">{data.label}</div>
    <div>{data.value}</div>
    <Handle type="target" position={Position.Left} />
    <Handle type="source" position={Position.Right} />
  </div>
)

const nodeTypes: NodeTypes = {
  custom: CustomNode,
}

interface SankeyDiagramProps {
  data: {
    nodes: SankeyNode[]
    edges: Edge[]
  }
}

const SankeyDiagram: React.FC<SankeyDiagramProps> = ({ data }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(data.nodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(data.edges)

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  return (
    <div style={{ height: '600px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      />
    </div>
  )
}

export default SankeyDiagram