import React, { useState, useEffect } from "react";
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
} from "@react-pdf/renderer";
import dateFormat from 'dateformat';
import { useParams } from "react-router-dom";
import { getEntreJourneAll, getEntreJourneAlls } from "../../actions/EntreAction";
import { getConteneur } from "../../actions/ConteneurAction";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff",
        color: "black",
    },
    section: {
        margin: 10,
        padding: 10,
    },
    Titre: {
        margin: 10,
        padding: 10,
        textAlign: 'center',
    },
    body: {
        margin: 10,
        padding: 10,
        textAlign: 'center',
    },
    table: { 
        display: "table", 
        width: "auto", 
        borderStyle: "solid", 
        borderColor: "#bfbfbf", 
        borderWidth: 1, 
        borderBottomWidth: 0 ,
    },
    tableRow: { 
        flexDirection: "row" 
    },
    tableColHeader: { 
        width: "100%", 
        borderStyle: "solid", 
        borderColor: "#bfbfbf", 
        borderBottomColor: "#000", 
        borderWidth: 1, 
        backgroundColor: "#f0f0f0" 
    },
    tableCol: { 
        width: "100%", 
        borderStyle: "solid", 
        borderColor: "#bfbfbf", 
        borderRightWidth: 1, /* Ajoute une ligne verticale à droite de chaque cellule */
        borderBottomWidth: 1
    },
    tableCellHeader: { 
        margin: 5, 
        fontSize: 12, 
        fontWeight: 500,
    },
    tableCell: { 
        margin: 5, 
        fontSize: 10 
    },
    tableColHeaderNew: { 
        width: "100%", 
        borderStyle: "solid", 
        borderColor: "#bfbfbf", 
        borderBottomColor: "#000", 
        borderWidth: 1, 
        backgroundColor: "#f0f0f0" 
    },
});

const PrintGroupageAll = () => {
    const [etatData, setEtatData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [typeText, setTypeText] = useState("");
    let { id } = useParams();

    useEffect(() => {
        getConteneur()
          .then((membre) => {
            setEtatData(membre);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
    }, [id]);

   
    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    return (
        <>
            <PDFViewer style={{ width: '100%', height: '100vh' }}>
                <Document>
                    <Page size="A4" style={styles.page}>
                        <View style={styles.section}>
                            <View className="row">
                                <View className="col-md-6">
                                    <Text>Image</Text>
                                </View>
                                <View className="col-md-6">
                                    <Text style={{fontSize : 15}}>ABG</Text>
                                    <Text style={{fontSize : 15}}>Kinshasa/Gombe</Text>
                                    <Text style={{fontSize : 15}}>Republique Dem du Congo</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.Titre}>
                            <View className="text-center">
                                <Text></Text>
                            </View>
                        </View>
                        <View style={styles.body}>
                            <View className="text-center">
                                <Text style={{fontSize : 15}}>Liste des Groupages </Text>
                                <Text> </Text>
                            </View>
                            <View>
                                <View style={styles.table}>
                                    <View style={styles.tableRow}>
                                        <View style={styles.tableColHeader}>
                                            <Text style={styles.tableCellHeader}>Nom</Text>
                                        </View>
                                        <View style={styles.tableColHeader}>
                                            <Text style={styles.tableCellHeader}>Numero</Text>
                                        </View>
                                        <View style={styles.tableColHeader}>
                                            <Text style={styles.tableCellHeader}>Date</Text>
                                        </View>
                                    </View>
                                    {etatData.map((etatDatas) => (
                                        <View style={styles.tableRow}>
                                            <View style={styles.tableCol}>
                                                <Text style={styles.tableCell}>{etatDatas.nom_conteneur}</Text>
                                            </View>
                                            <View style={styles.tableCol}>
                                                <Text style={styles.tableCell}>{etatDatas.numero}</Text>
                                            </View>
                                            <View style={styles.tableCol}>
                                                <Text style={styles.tableCell}>{dateFormat(etatDatas.created_at, 'dd/mm/yyyy' )}</Text>
                                            </View>
                                    </View>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </Page>
                </Document>
            </PDFViewer>
        </>
    );
}

export default PrintGroupageAll;
