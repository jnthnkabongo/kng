import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Dashboad from '../Pages/Dashboad'
import Layout from '../Components/Layout'
import Entre from '../Pages/Entre'
import Sortir from '../Pages/Sortir'
import DetteClient from '../Pages/DetteClient'
import DettePartenaire from '../Pages/DettePartenaire'
import Conteneur from '../Pages/Conteneur'
import Depense from '../Pages/Depense'
import Compte from '../Pages/Compte'
import AddTransaction from '../Pages/AddTransaction'
import EntreDetail from '../Pages/EntreDetail'
import EntreUpdate from '../Pages/EntreUpdate'
import AddDepnse from '../Pages/AddDepnse'
import DepenseDetail from '../Pages/DepenseDetail'
import DepenseUpdate from '../Pages/DepenseUpdate'
import AddSorti from '../Pages/DepenseUpdate'
import AddDepenseKinshasa from '../Pages/AddDepenseKinshasa'
import AddGroupage from '../Pages/AddGroupage'
import Cloture from '../Pages/Cloture'
import Page404 from '../Pages/Page404'
import Deconnexion from '../Pages/Deconnexion'
import AffecterUser from '../Pages/AffecterUser'
import PrintTransaction from '../Pages/Print/PintTransaction'
import PrintTrasanctionAll from '../Pages/Print/PrintTrasanctionAll'
import PrintTrasanctionAlls from '../Pages/Print/PrintTrasanctionAlls'
import Parametre from '../Pages/Parametre'
import AddTypeTransaction from '../Pages/AddTypeTransaction'
import ViewCloture from '../Pages/ViewCloture'
import PrintGroupageAll from '../Pages/Print/printGroupageAlls'
import PrintGroupageUsers from '../Pages/Print/PrintGroupageUsers'
import DepenseConteneur from '../Pages/PayementConteneur'
import ListPaiementConteneur from '../Pages/ListPaiementConteneur'

const IndexRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/*' element={<Page404 />} />
        <Route path="/ImprimerTransaction/:id" element={<PrintTransaction />} />
        <Route path="/ImprimerTransactionAll" element={<PrintTrasanctionAll />} />
        <Route path="/ImprimerTransactionAlls" element={<PrintTrasanctionAlls />} />
        <Route path="/listegroupage" element={<PrintGroupageAll />} />
        <Route path="/listegroupageUser/:id" element={<PrintGroupageUsers />} />

        <Route element={<Layout />}>
          <Route path="/dashboad" element={<Dashboad />} />
          <Route path="/entrer" element={<Entre />} />
          <Route path="/Addentrer" element={<AddTransaction />} />
          <Route path="/sortir" element={<Sortir />} />
          <Route path="/detteClient" element={<DetteClient />} />
          <Route path="/dettePartenaire" element={<DettePartenaire />} />
          <Route path="/conteneur" element={<Conteneur />} />
          <Route path="/depense" element={<Depense />} />
          <Route path="/compte" element={<Compte />} />
          <Route path="/entredetail/:id" element={<EntreDetail />} />
          <Route path="/entreupdate/:id" element={<EntreUpdate />} />
          <Route path="/adddepnse" element={<AddDepnse />} />
          <Route path="/addDepenseKinshasa" element={<AddDepenseKinshasa />} />
          <Route path="/depensedetail/:id" element={<DepenseDetail />} />
          <Route path="/depenseupdate/:id" element={<DepenseUpdate />} />
          <Route path="/addsorti" element={<AddSorti />} />
          <Route path="/AddGroupage" element={<AddGroupage />} />
          <Route path="/cloture" element={<Cloture />} />
          <Route path="/deconnextion" element={<Deconnexion />} />
          <Route path="/AffecterUser" element={<AffecterUser />} />
          <Route path="/Parametre" element={<Parametre />} />
          <Route path="/addtypetransaction" element={<AddTypeTransaction />} />
          <Route path="/listecloture" element={<ViewCloture />} />
          <Route path="/depenseConteneur/:id" element={<DepenseConteneur />} />
          <Route path="/ListdepenseConteneur/:id" element={<ListPaiementConteneur />} />
        </Route>
      </Routes>
    </>
  )
}

export default IndexRoute